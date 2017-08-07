library(readxl)
library(jsonlite)

urls <- read_excel("/home/alec/Projects/Brookings/export-nation/2017/Export2017URL.xlsx")

json <- toJSON(urls)

writeLines(json, "/home/alec/Projects/Brookings/export-nation/2017/urls.json")
