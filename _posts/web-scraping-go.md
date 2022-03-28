---
title: 'Парсин auto.ru на Golang'
excerpt: 'Парсинг данных или Web Scraping важен для работы множества организаций. Любой разработчик должен иметь представление как забирать данные с других ресурсов. Google и Yandex занимаются парсингом сайтов.'
coverImage: '/assets/posts/preview/web-scraping-go.png'
date: '2022-02-14T00:00:00.000Z'
author:
name: Дмитрий Русанов
ogImage:
    url: '/assets/posts/preview/web-scraping-go.png'
tags: ['beginners', 'go', 'scraping']
section: 'backend'
---

Парсинг данных или Web Scraping важен для работы множества организаций. Любой разработчик должен иметь представление как забирать данные с других ресурсов.

Google и Yandex занимаются парсингом сайтов.

Основные цели парсинга:

- Сбор данных для анализа. Например для понимания динамики цен на молоко.
- Размещение собранных данных на своих ресурсах.
- Получение актуальных данных из первоисточника. Например: раз в день парсить курсы валют.

Здесь мы будем писать парсер на Go, модном и современном языке.

Будучи компилируемым языком Go позволяет писать программы, скорость которых сопоставима с программами на C++.

Для парсинга мы будем использовать библиотеки:
- goquery
- Colly

Основу библиотеки Colly составляет Collector, он отвечает за выполннение запросов.

Инициализация проекта и получение данных.
Нужно создать папку с проектом, у меня это: go_scraper. Зайти в неё и выполнить команду:
`go mod init go_scraper`. Это создаст файл go.mod в котором будет храниться информация об установленных библиотеках.
Для установки  Colly выполните команду: `go get -u github.com/gocolly/colly/...  `
Сейчас мы можем приступить к написанию кода. Создадим файл main.go.
Укажем название пакета  и импортируем библиотеки.
```
package main

import (
	"fmt"

	"github.com/gocolly/colly"
)
```
Далее напишем main функцию, в которой инициализируем Collector.
```
func main() {
    c := colly.NewCollector(
        colly.AllowedDomains("auto.ru"),
    )
}
```
Карточка с автомобилем находится в контейнере class=“ListingItem“.
Далее используя метод `OnHTML` собираем ссылки, заголовки и цены автомобилей. Значение атрибута получается с помощью метода ChildAttr. Текст элемента получается с помощью метода  ChildText и css селектора, полученного из браузера.
```
	c.OnHTML(".ListingItem", func(e *colly.HTMLElement) {
		link := e.ChildAttr("a", "href")
		price := e.ChildText(".ListingItemPrice__content")
		title := e.ChildText(".ListingItemTitle__link")

		fmt.Println(link, price, title)
	})
	c.Visit("https://auto.ru/moskva/cars/all/")
}
```
`OnHTML` принимает два параметра. Первый это селектор элемента ".ListingItem". Второй параметр это функция callback, которая будет вызвана, после как будет найден элемент HTML.
В конце помещается `c.Visit` в нем указывается адрес на который делается запрос, этот метод вызывается до вызова остальных колбеков.
Запустив парсер командой `go run main.go` в консоль выведутся ссылки на автомобили.
Стоит отметить, что колбеки вызываются для каждой посещённой страницы. Они вызываются в таком порядке
1. OnRequest
2. OnResponse
3. OnHTML
4. OnScraped
В колбеке OnRequest мы можем считать количество сделанных запросов, и вслучае превышения лимита остановить работу парсера. Нужно лишь добавить эти строки кода.
```
numVisited := 0
c.OnRequest(func(r *colly.Request) {
    if numVisited > 100 {
        r.Abort()
    }
    numVisited++
})
```
В колбеке OnResponse у нас есть доступ HTML.
```
c.OnResponse(func(r *colly.Response) {
    fmt.Println(r.Body)
})
```
Запись полученных данных в таблицу
Сейчас мы успешно выводим ссылки в консоль, но хочется предоставить данные в более удобном виде. Для этого мы запишем их в csv.
Импортируем библиотеки
```
import (
    "encoding/csv"
    "fmt"
    "log"
    "os"
    
    "github.com/gocolly/colly"
)

```
Добавим код создания csv файла над Collector.
```
fName := "data.csv"
file, err := os.Create(fName)
if err != nil {
    log.Fatalf("Could not create file, err: %q", err)
return
}
defer file.Close()

writer := csv.NewWriter(file)
defer writer.Flush()

writer.Write([]string{"Name", "Price", "Link"})

c := colly.NewCollector(
c   olly.AllowedDomains("auto.ru"),
)

```
В конец колбека OnHtml добавим код для записи
```
c.OnHTML(".ListingItem", func(e *colly.HTMLElement) {
    link := e.ChildAttr("a", "href")
    price := e.ChildText(".ListingItemPrice__content")
    title := e.ChildText(".ListingItemTitle__link")
    
    writer.Write([]string{
        title,
        price,
        link,
    })
})

```
Запустив команду `go run main.go` получаем файл auto.csv с информацией об автомобилях.

Заключение
В этой статье вы научились как парсить данные с сайтов с помощью Go и библиотеки Colly. Поэкспериментируйте попробуйте улучшить код, а также попробуйте собрать данные с другого сайта.

Финальный код:
```
package main

import (
    "encoding/csv"
    "log"
    "os"
    
    "github.com/gocolly/colly"
)

func main() {

    fName := "auto.csv"
    file, err := os.Create(fName)
    if err != nil {
        log.Fatalf("Could not create file, err: %q", err)
        return
    }
    defer file.Close()
    
    writer := csv.NewWriter(file)
    defer writer.Flush()
    
    writer.Write([]string{"Name", "Price", "Link"})
    
    c := colly.NewCollector(
        colly.AllowedDomains("auto.ru"),
    )
    c.OnHTML(".ListingItem", func(e *colly.HTMLElement) {
        link := e.ChildAttr("a", "href")
        price := e.ChildText(".ListingItemPrice__content")
        title := e.ChildText(".ListingItemTitle__link")
        
        writer.Write([]string{
            title,
            price,
            link,
        })
    })
    c.Visit("https://auto.ru/moskva/cars/all/")
}


```
