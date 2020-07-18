---
title: Learn Python Basics🐍
cover: ./image.jpg
date: 2020-07-18
description: All the usual blog post.
tags: ['post']
---

<br/>

## Introduction 📢

Python is an easy to learn, powerful programming language.
It has efficient high-level data structures and a simple but effective approach to object-oriented programming.
Python’s elegant syntax and dynamic typing, together with its interpreted nature,make it an ideal language
for scripting and rapid application development in many areas on most platforms.

### Hello world 👋

In this program we are using python3 . You can get it here.
After installation you directly get stared with python IDLE.
Or else you can use your favourite text editor and add python extension.
In python IDLE you can get the output,
directly as you have written the code and pressed entered.

In this program we are just printing out hello world string. If you are familiar with another programming language,
then you can notice there is no main method here. Actually we don't have to explicity call in the main method here.
Python compiler will do this for us, That is one of the best part of python it is very easy get familiar with syntax.

First program:

copy code from here:

```python
print("Hello world, this is my first line code ever!")
```

<br />

#### Variables 📦

Variables in python
Variables are basically like empty containers where you can store values.
Unlike many conventional languages it doesn't have command for declaring Variables.

```python
num1 = 234
num2 = 2434.46
name1 = 'John Snow'

```

<br />

#### Multiple Assignment

```python
a= b=c=d=1
print(c)

a,b,c,d = 12,44,546, "Var 4"
print(d)
```

<br />

#### Data types 💾

Data types are the classification or categorization of data items.
It represents the kind of value that tells what operations can be performed on a particular data.

Data types in python:

• 1. Numbers  
• 2. Strings  
• 3. List  
• 4. Tuple  
• 5. Dictionary

#### Similarities between Java

- Tuple is similar to the list. but for its declaration we use parenthesis()
- Tuples cannot be updated like listsbr
- Dictionary is Similar to hashtable.
- Dictionaries are enclosed by curly braces { } and values can be assigned and accessed using squae braces ([])

```python
# 1. Numbers

number1 = 3423

# 2. Strings

str1 = "This is the Testing string"
print(str1)       # Prints complete string

# 3. List

list = ['noraml 1', 7834, " snow", 45641.54, 'john', 70.2 ]
print(list)         # Prints complete list
print(list[0])       # Prints first element of the list

# 4. Tuple

tuple1 = (342,35.54564,"new1",211,"FIle34",'Rock',2352)
print(tuple1)          # Prints complete tuple
print(tuple1[4])       # Prints fifth element of thetuple

# 5. Dictionary

dict1 ={'student 1':123,'Lecture 34':411,'Food':'Category'}
print(dict1)             #Printing whole dictionary
print(dict1['student 1'])    # Prints value for 'Student 1' key
```

<br/>

#### If else 👍 / 👎

An else statement can be combined with an if statement.
An else statement contains the block of code that executes if the conditional expression in
the if statement resolves to 0 or a FALSE value. The else statement is an optional statement and there could be at most only
one else statement following if.

```python
n1 = 122
n2 = 223

if(n1 !=n2):
  print ("n1 is not equal to n2")

if n1>n2:
  print ("n1 is greater than n2")

elif n1==n2:
    print ("n1 is equal to n2")

else:
    print ("n1 is lesser than n2")
```

<br/>

#### Functions 🏂

A function is a block of organized, reusable code that is used to perform a single, related action.
Functions provide better modularity for your application and a high degree of code reusing.
Functions help break our program into smaller and modular chunks. As our program grows larger and larger,
functions make it more organized and manageable.make it an ideal language for scripting and rapid application
development in many areas on most platforms.
Furthermore, it avoids repetition and makes the code reusable.

```python
num1 = int(input("Enter number: "))

def EvenOdd(num1):

  if num1%2==0:
    print("Entered number is Even ")

  else:
    print("Entered number is Odd ")

EvenOdd(num1)
```

<br/>

References 🔗

Taken from TutorialsPoint and porgrammiz.
You can connect me via below links

<!-- This is an example blog post. All your blog posts should be here: `content/posts`.

Websites like Reddit, StackOverflow, and GitHub had millions of people using Markdown. And Markdown started to be used beyond the web, to author books, articles, slide shows, letters, and lecture notes.

What distinguishes Markdown from many other lightweight markup syntaxes, which are often easier to write, is its readability. As Gruber writes:

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.

## Frontmatter

Metadata for your Markdown.

In this post it looks like this:

```md
---
title: Full Blog Post Example
cover: ./image.jpg
date: 2019-11-05
description: All the usual blog post.
tags: ['post']
---
```

Read more about this setting here: [github.com/Chronoblog/gatsby-theme-chronoblog#posts](https://github.com/Chronoblog/gatsby-theme-chronoblog#posts)

## Markdown

This post is a `markdown` file and you can do everything in it that allows you to do markdown.

### Headers

```md
# This is an <h1> tag

## This is an <h2> tag

###### This is an <h6> tag
```

# This is an `<h1>` tag

## This is an `<h2>` tag

###### This is an `<h6>` tag

### Emphasis

```md
_This text will be italic_
**This text will be bold**
```

_This text will be italic_
**This text will be bold**

### Lists

```md
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

- Item 1
- Item 2
  - Item 2a
  - Item 2b

### Images

```md
![image-in-post](./image-in-post.jpg)
```

![image-in-post](./image-in-post.jpg)

### Links

```md
[github.com/Chronoblog/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog)
```

[github.com/Chronoblog/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog)

### Gatsby Links

```jsx
<Link to="posts-and-articles">posts-and-articles</Link>
```

Link: <Link to='posts-and-articles'>posts-and-articles</Link>

### Blockquotes

```md
As Kanye West said:

> We're living the future so
> the present is our past.
```

As Kanye West said:

> We're living the future so
> the present is our past.

### Inline code
```python
# 1. Numbers
  number1 = 3423

  # 2. Strings
  str1 = "This is the Testing string"
  print(str1)   # Prints complete string

  # 3. List
  list = ['noraml 1', 7834, " snow", 45641.54, 'john', 70.2 ]
  print(list)           # Prints complete list
  print(list[0])        # Prints first element of the list

  # 4. Tuple
  tuple1 = (342,35.54564,"new1",211,"FIle34",'Rock',2352)
  print(tuple1)                   # Prints complete tuple
  print(tuple1[4])        # Prints fifth element of thetuple

  # 5. Dictionary
  dict1 ={'student 1':123,'Lecture 34':411,'Food':'Category'}
  print(dict1) #Printing whole dictionary
  print(dict1['student 1']) # Prints value for 'Student 1' key
```


**`js:`**

```js
const someFun = (text) => {
  console.log('some ' + text);
};
someFun('text');
```

**`css:`**

```css
.thing {
  font-size: 16px;
  width: 100%;
}
@media screen and (min-width: 40em) {
  font-size: 20px;
  width: 50%;
}
@media screen and (min-width: 52em) {
  font-size: 24px;
}
```

**`jsx:`**

```jsx
<Thing fontSize={[16, 20, 24]} width={[1, 1 / 2]} />
```

What distinguishes Markdown from many other lightweight markup syntaxes, which are often easier to write, is its readability. -->
