<!DOCTYPE html>
<html<% if(htmlWebpackPlugin.files.manifest) { %> manifest="<%= htmlWebpackPlugin.files.manifest %>"<% } %>>
  <head>
    <meta charset="UTF-8">
    <title><%=htmlWebpackPlugin.options.title || 'Webpack App'%></title>
    <% if (htmlWebpackPlugin.files.favicon) { %>
      <link rel="shortcut icon" href="{%=htmlWebpackPlugin.files.favicon%}">
    <% } %>
    <% for (var css in htmlWebpackPlugin.files.css) { %>
      <link href="<%=htmlWebpackPlugin.files.css[css] %>" rel="stylesheet">
    <% } %>
  </head>
  <body>
    <div id="app"></div>
    <script src="<%=htmlWebpackPlugin.files.chunks[0] %>"></script>
  </body>
</html>
