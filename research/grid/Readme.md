RESEARCH — GRID
Ad Soyad — FS 49

---

1. FR VAHİDİ

İzah:
`fr` vahidi CSS Grid-də konteynerdə qalan boş sahəni hissələrə bölmək üçün istifadə olunur. `1fr` bir pay deməkdir və məsələn `1fr 2fr 1fr` yazıldıqda boş sahə 1:2:1 nisbətində bölünür. `px` konkret ölçü verdiyi halda, `fr` mövcud boş sahəyə uyğun olaraq ölçünü hesablayır. Buna görə `fr` responsive layout hazırlayarkən daha rahatdır.

Kod:

```
.grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
}
```

Nə vaxt işlədilir:
Sütunların sabit piksel ölçüsü əvəzinə mövcud sahəni müəyyən nisbətdə paylaşmasını istəyəndə istifadə edilir. Məsələn, əsas məzmunu yan hissələrdən daha geniş etmək üçün `1fr 2fr 1fr` istifadə etmək olar.

---

2. REPEAT() VƏ GRID-TEMPLATE-ROWS

İzah:
`repeat()` eyni grid ölçüsünü bir neçə dəfə yazmaq əvəzinə daha qısa formada yazmağa imkan verir. Məsələn, `repeat(3, 1fr)` üç ədəd `1fr` sütunu yaratmaqla eyni nəticəni verir. `grid-template-rows` isə grid-in sətirlərinin ölçüsünü müəyyən edir. Sütunlar üçün `grid-template-columns`, sətirlər üçün isə `grid-template-rows` istifadə olunur.

Kod:

```
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100px 150px;
    gap: 10px;
}
```

Nə vaxt işlədilir:
Eyni ölçülü çoxlu sütun və ya sətir yaratmaq lazım olduqda `repeat()` istifadə edilir. Sətirlərə konkret ölçü vermək lazım olduqda isə `grid-template-rows` istifadə olunur.

---

3. MINMAX()

İzah:
`minmax()` grid sütununun və ya sətrinin minimum və maksimum ölçüsünü təyin etməyə imkan verir. Birinci dəyər elementin gedə biləcəyi ən kiçik ölçünü, ikinci dəyər isə ən böyük ölçünü göstərir. Məsələn, `minmax(200px, 1fr)` sütunun 200 piksel-dən kiçik olmamasını və mümkün olduqda qalan sahəni `1fr` kimi istifadə etməsini bildirir. Bu xüsusiyyət responsive layout yaratmaq üçün çox faydalıdır.

Kod:

```
.grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 16px;
}
```

Nə vaxt işlədilir:
Kartların və ya sütunların çox kiçilməsinin qarşısını almaq, eyni zamanda boş sahədən istifadə etmək istəyəndə istifadə edilir. Xüsusilə responsive grid-lərdə faydalıdır.

---

4. AUTO-FIT VƏ AUTO-FILL

İzah:
`auto-fit` və `auto-fill` grid-də mümkün qədər çox sütun yerləşdirməyə kömək edir. `auto-fill` mövcud sahəyə sığacaq grid sütunları üçün yerləri saxlaya bilər, hətta bəzi yerlər boş qala bilər. `auto-fit` isə boş qalan yerləri sıxışdıraraq mövcud elementlərin daha geniş olmasına imkan verir. Hər ikisi adətən `repeat()` və `minmax()` ilə birlikdə istifadə olunur.

Kod:

```
.grid {
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(200px, 1fr)
    );
    gap: 16px;
}
```

Nə vaxt işlədilir:
Kartların ekran ölçüsünə görə avtomatik olaraq sütun sayını dəyişməsi lazım olduqda istifadə edilir. Beləliklə çox vaxt ayrıca media query yazmadan responsive grid yaratmaq mümkündür.

---

5. GRID-COLUMN, GRID-ROW VƏ GRID-AREA

İzah:
`grid-column` elementin hansı sütun xəttindən başlayıb hansı xəttdə bitəcəyini müəyyən edir. `grid-row` eyni işi sətirlər üçün görür. `span` istifadə etməklə elementin neçə sütun və ya sətir tutacağını da göstərmək mümkündür. `grid-area` isə elementin grid-də yerləşməsini daha qısa formada müəyyən etmək üçün istifadə oluna bilər.

Kod:

```
.card {
    grid-column: span 2;
}

.large-card {
    grid-row: span 2;
}
```

Nə vaxt işlədilir:
Grid-də bəzi elementlərin digər elementlərdən daha böyük sahə tutması lazım olduqda istifadə edilir. Məsələn, birinci kartın iki sütun genişliyində olması üçün `grid-column: span 2` yazmaq olar.

---

6. GRID-TEMPLATE-AREAS

İzah:
`grid-template-areas` grid-in hissələrinə ad verərək layout qurmağa imkan verir. Hər sətirdə yazılan adlar grid-də həmin sahələrin necə yerləşəcəyini göstərir. Daha sonra elementə `grid-area` ilə uyğun ad verilir. Bu üsul layout-un CSS kodunda vizual olaraq daha asan başa düşülməsinə kömək edir.

Kod:

```
.layout {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}

header { grid-area: header; }
aside { grid-area: sidebar; }
```

Nə vaxt işlədilir:
Header, sidebar, main və footer kimi böyük layout hissələrini aydın şəkildə yerləşdirmək lazım olduqda istifadə edilir. Xüsusilə səhifənin ümumi quruluşunu oxunaqlı saxlamaq üçün faydalıdır.

---

7. IMPLICIT GRID: GRID-AUTO-ROWS VƏ GRID-AUTO-FLOW

İzah:
Explicit grid əvvəlcədən `grid-template-columns` və `grid-template-rows` ilə yaratdığımız grid hissələridir. Əgər elementlərin sayı əvvəlcədən müəyyən etdiyimiz grid sahəsindən çox olarsa, browser əlavə grid sətirləri və ya sütunları özü yarada bilər. Bu əlavə hissələr implicit grid adlanır. `grid-auto-rows` və `grid-auto-columns` yaradılan əlavə hissələrin ölçüsünü, `grid-auto-flow` isə elementlərin avtomatik yerləşmə istiqamətini idarə edir.

Kod:

```
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
    grid-auto-flow: row;
    gap: 10px;
}
```

Nə vaxt işlədilir:
Elementlərin sayı əvvəlcədən dəqiq bilinmədikdə və yeni elementlərin avtomatik olaraq grid-də yerləşməsi lazım olduqda istifadə edilir. Məsələn, məlumat bazasından gələn çoxlu kartları grid-də göstərmək üçün faydalı ola bilər.

---

8. KONTEYNER VƏ ELEMENT SƏVİYYƏSİNDƏ DÜZÜLÜŞ

İzah:
Grid-də düzülüş xüsusiyyətlərinin bir hissəsi container-ə, digər hissəsi isə onun içindəki elementlərə tətbiq olunur. `justify-content` və `align-content` bütün grid-in container daxilində necə yerləşəcəyini idarə edir. `justify-items` və `align-items` isə grid elementlərinin öz xanalarının daxilində necə yerləşəcəyini müəyyən edir. `justify-self` və `align-self` yalnız seçilmiş bir elementin düzülüşünü dəyişir.

Kod:

```
.grid {
    display: grid;
    justify-items: center;
    align-items: center;
}

.special {
    justify-self: end;
    align-self: start;
}
```

Nə vaxt işlədilir:
Bütün elementləri eyni qaydada yerləşdirmək üçün `justify-items` və `align-items`, yalnız bir elementi fərqli yerləşdirmək üçün isə `justify-self` və `align-self` istifadə edilir. Bütün grid-in container daxilində mövqeyini dəyişmək üçün `justify-content` və `align-content` daha uyğundur.

---

9. FLEX İLƏ GRID ARASINDAKI SEÇİM

İzah:
Flexbox əsasən bir istiqamətdə, yəni row və ya column üzrə elementləri düzür. Grid isə eyni anda həm sətir, həm də sütunlarla işlədiyi üçün iki ölçülü layout qurmaq üçün daha uyğundur. Məsələn, navbar daxilində elementləri bir xətt üzrə düzmək üçün Flexbox rahatdır. Kartlardan ibarət sətir və sütun sistemi qurmaq üçün isə Grid daha uyğun seçimdir.

Kod:

```
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}
```

Nə vaxt işlədilir:
Bir istiqamətdə elementləri düzmək və aralarındakı məsafəni idarə etmək üçün Flexbox, sətir və sütunlardan ibarət mürəkkəb layout yaratmaq üçün isə Grid istifadə edilir.

---

10. YEKUN DÜZÜLÜŞ

10.1 GRID-TEMPLATE-AREAS İLƏ

Kod:

```
.layout {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    gap: 16px;
    min-height: 100vh;
}

.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main {
    grid-area: main;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.footer {
    grid-area: footer;
}
```

---

10.2 GRID-COLUMN VƏ GRID-ROW İLƏ

Kod:

```
.layout {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 16px;
    min-height: 100vh;
}

.header {
    grid-column: 1 / -1;
    grid-row: 1;
}

.sidebar {
    grid-column: 1;
    grid-row: 2;
}

.main {
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.footer {
    grid-column: 1 / -1;
    grid-row: 3;
}
```

---

10.3 KART ELEMENTLƏRİ

Kod:

```
.main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.card:first-child {
    grid-column: span 2;
}
```

---

10.4 MÜQAYİSƏ

`grid-template-areas` ilə yazılan variant mənə görə daha oxunaqlıdır, çünki layout-un quruluşu adların özündən aydın görünür. `grid-column` və `grid-row` variantında isə elementlərin hansı xəttlərdə yerləşdiyini daha dəqiq idarə etmək mümkündür. Buna görə böyük səhifənin ümumi quruluşunda `grid-template-areas`, konkret elementlərin ölçüsünü və mövqeyini idarə etməkdə isə `grid-column` və `grid-row` daha rahat ola bilər.

---
