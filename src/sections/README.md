# Ghost Sections

Snippets are the lowest level of objects available. 

# Usage

Sections are intended to be used as content blocks for the customize editor. Sections can make use of the following liquid objects:

Object | Description
------------ | -------------
`{% stylesheet %}` | Allows section-specific CSS to be directly added inline
`{% javascript %}` | Allows section-specific Javascript to be executed
`{% schema %}` | A JSON object that defines the available configurations for the customize editor

```
{% section 'your-section' %}
```

# Resources

https://www.shopify.com/partners/blog/the-beginner-s-guide-to-building-shopify-themes-with-sections