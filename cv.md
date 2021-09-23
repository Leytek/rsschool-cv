# Alexander Smirnov
Web-Frontend Programmer

## Contact info
* *Email:*__leytek@yandex.ru, leytek2@gmail.com__
* *Discord:*__Alexandr Smirnov (@Leytek)__
* [*vk.com*](https://vk.com/id40296460)

## About me
I am 28 years old, have an incomplete higher education, at the moment studying on the course RSSchool. I am positive, friendly, open to new things, diligent, attentive to details, responsible. I aim to progress in IT further and become a real professional.

## Skills
* HTML
* CSS
* JS
* C/C++
* Python
* SQL
* Git
* IntelliJ IDEA
* VSCode

## Code
```
void quickSort(int *tempArray, int first, int last)
{
    int middle;
    middle = tempArray[(first + last) / 2];
    int f = first, l = last;
    while (f < l)
	{
        while (tempArray[f] < middle) f++;
        while (tempArray[l] > middle) l--;
          if (f <= l)
		  {
            std::swap(tempArray[f], tempArray[l]);
            f++;
            l--;
          }
    }
    if (first < l) quickSort(tempArray, first, l);
    if (f < last) quickSort(tempArray, f, last);
}
```

## Experience
Have no experience as web-frontend programmer.

## Education
* Incomplete higher education at VOLGA STATE UNIVERSITY OF TECHNOLOGY
* Harvard CS50

## English level
Pre-intermediate (A2)
