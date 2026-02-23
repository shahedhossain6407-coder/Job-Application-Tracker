1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
getElementById: This is a DOM method used to find a specific element by its unique ID. It helps in building logic by calling that specific ID.

Output: It returns a single Object. If the element is not found, it returns null.

getElementsByClassName: This is used to find elements by their Class Name. Since one class can be assigned to multiple elements, it returns an HTMLCollection (which acts similarly to an array).

Feature: This is a Live method, meaning if new elements are added to the HTML later, this collection updates automatically.

querySelector: This is a powerful CSS Selector method. You can catch any element using CSS syntax, e.g., document.querySelector(".class") or document.querySelector("#id").

Feature: It is Static (the list doesn't auto-update with DOM changes) and it only returns the first element that matches the condition.

querySelectorAll: There is no major logical difference from querySelector, but the output is different.

Output: While querySelector gives only the first match, querySelectorAll returns all elements that match the condition in a NodeList.

2. How to create and insert a new element into the DOM?
Create: To create a new element, we use document.createElement("tagName"). For example, document.createElement("li") creates a list item in memory.

Insert: Creating it isn't enough; you must attach it to an existing element.

Example: ul.appendChild(li); — here, the newly created li is added (appended) inside an existing ul list.

3. What is Event Bubbling? And how does it work?
Event Bubbling is a vital JavaScript DOM concept. It is the process where an event (like a click) spreads from one element to others. Simply put, when you click an element (like a button), the event isn't restricted to just that button; it rises like a bubble to the Parent elements.

How it works (The Sequence):

Target Element: First, the exact element you clicked handles the event.

Parent Element: Then, the event moves up to its immediate parent.

Top Level: It continues rising through the levels (body, html, document) until it finally reaches the Window object.

4. What is Event Delegation? Why is it useful?
Event Delegation is a technique where instead of adding individual Event Listeners to every child element (like multiple buttons or list items), we add just one listener to the main Parent Element.

It works by taking advantage of Event Bubbling. Since a click on a child "bubbles up" to the parent, we can catch and manage that click from the parent level. This makes the code more efficient and handles dynamically added elements automatically.

5. Difference between preventDefault() and stopPropagation()
preventDefault(): This method is used to stop an element's default behavior.

Example: Clicking a link usually takes you to another page; using preventDefault() stops that redirection.

stopPropagation(): This method is used specifically to stop Event Bubbling.

Example: If a button is inside a div and you click the button, the event normally bubbles up to the div. Using stopPropagation() ensures the click stays only on the button and does not trigger the div's event.
