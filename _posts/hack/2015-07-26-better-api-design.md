---
layout: post
title: "Better Api Design in 4 minutes"
modified:
categories: hack
excerpt: General notes and suggestions for a scalable and reliable api.
tags: [api, design, rest]
image:
date: 2015-07-26T23:25:02-07:00
---

* Table of contents
{:toc}

---

{% highlight text %}
Why API? - An asset, consumers buy and learn it.
Why better API? - Better user experience, thats what customers pay for.
{% endhighlight %}

## What makes a Good API?
1. Easy to learn and use.
2. Hard to misuse.
3. Easy to read and maintain.
4. Easy to evolve and scale.
5. Satisfies requirements.

## Single page specs
1. Easy to modify, refactor might take just 10 minutes.
2. Easy to have multiple specs and dispose off useless ones without much pain to yourself.
3. Start before specs, flush out broken implementations before going into details.

## Make compromises
1. Can't please everyone? *Aim to displease everyone equally*.
2. Everyone should be happy enough though.
3. Mistakes are fine, will be covered up once API evolves.

## Do it well
1. Come up with good names, let API talk to the customer. e.g.- getStatus() instead of httpRequestStatusReturned().
2. API is a language, ensure consistency and symmetry in naming. That means, same word means same thing throughout the API.

## Smaller APIs
1. *When in doubt, leave it out.*
2. Avoid bulk, sell concepts. E.g.- `TreeSet`, `LinkedHashSet`, `HashSet` are implementations of `Set` interface in `java.util.collections`, each of these teach a new concept with the same functionality.
3. Consumer should learn a lot rather than do a lot.

## Implementation Details
- All user should know is `getHash()` returns a unique integer for unique input. This allows you evolve your function in future without confusing user.

## Minimize Accessibility
1. Make classes, members as private as possible.
2. Multiple modules over one big module. Split modules in a way that makes sense.
3. Allow modules to be used, tested, debugged independently.

## Documentation is a religion
1. Document each public or protected member. Remember - *size of block* is not as good as *size of block in bytes*
2. Each method should have preconditions, postconditions, connections, side-effects and parameters well documented.

## Performance
1. A slow API is better than a broken API. A good balance is required.
2. Good design usually comes with a good performance.
3. Mimic the core APIs and patterns in the platform. Makes easy to onboard consumers.

## Minimize mutability
1. Making classes immutable ensures they are thread safe and resuable. One drawback is separate object for each value.
2. Reduce space usage for mutable objects.

## Method design
1. Name methods based on the first important thing they do.
2. A method does one thing at a time. User doesn't expect `boolean isSet()` to set an unset variable and return True, it should just validate condition.
3. Consistent return types. For `int[] getOutput()` do not return `null` for an empty output, instead return an empty int array.

## Healthy practices
1. Programmatic access to all data in string form. User's shouldn't be parsing a string for information. E.g.- Providing an implementation of `getStackTrace()`.
2. Cut-paste makes code error prone.
3. Because you can, doesn't mean you should.
4. Use appropriate input parameter and return types.
5. Don't use string as data types, make a string into a constant and leave it there. Simplest situation would be to use a boolean instead of string "Yes/No".
6. Consistent parameter ordering. In `java.util.collections` first parameter is always the collection to be queried or modified.
