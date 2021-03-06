library(readxl)
library(jsonlite)

#generate lookup table for states
states <- c("Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
            "Connecticut", "Delaware", "District of Columbia", "Florida", 
            "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
            "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", 
            "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", 
            "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
            "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", 
            "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
            "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
            "West Virginia", "Wisconsin", "Wyoming")

fips <- c("01", "02", "04", "05", "06", "08", "09", "10", "11", "12", 
          "13", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", 
          "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", 
          "36", "37", "38", "39", "40", "41", "42", "44", "45", "46", "47", 
          "48", "49", "50", "51", "53", "54", "55", "56")

alpha <- c("AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", 
           "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
           "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", 
           "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", 
           "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY")

region <- c("East South Central", "Pacific", "Mountain", "West South Central", 
            "Pacific", "Mountain", "New England", "South Atlantic", "South Atlantic", 
            "South Atlantic", "South Atlantic", "Pacific", "Mountain", "East North Central", 
            "East North Central", "West North Central", "West North Central", 
            "East South Central", "West South Central", "New England", "South Atlantic", 
            "New England", "East North Central", "West North Central", "East South Central", 
            "West North Central", "Mountain", "West North Central", "Mountain", 
            "New England", "Middle Atlantic", "Mountain", "Middle Atlantic", 
            "South Atlantic", "West North Central", "East North Central", 
            "West South Central", "Pacific", "Middle Atlantic", "New England", 
            "South Atlantic", "West North Central", "East South Central", 
            "West South Central", "Mountain", "New England", "South Atlantic", 
            "Pacific", "South Atlantic", "East North Central", "Mountain")

broadregion <- c("South", "West", "West", "South", "West", "West", "Northeast", 
                 "South", "South", "South", "South", "West", "West", "Midwest", 
                 "Midwest", "Midwest", "Midwest", "South", "South", "Northeast", 
                 "South", "Northeast", "Midwest", "Midwest", "South", "Midwest", 
                 "West", "Midwest", "West", "Northeast", "Northeast", "West", 
                 "Northeast", "South", "Midwest", "Midwest", "South", "West", 
                 "Northeast", "Northeast", "South", "Midwest", "South", "South", 
                 "West", "Northeast", "South", "West", "South", "Midwest", "West")

st_lookup <- data.frame(name=states, fips=fips, usps=alpha, region=region, broadregion=broadregion)

#get metro filenames
metro_files <- list.files("/home/alec/Projects/Brookings/export-nation/2017/AllProfiles/Metros/")
state_files <- list.files("/home/alec/Projects/Brookings/export-nation/2017/AllProfiles/States/")
region_files <- list.files("/home/alec/Projects/Brookings/export-nation/2017/AllProfiles/US + Regions/")

metro_data <- data.frame(name=sub("\\.pdf", "", metro_files), file=metro_files)
region_data <- data.frame(name=sub("\\.pdf", "", region_files), file=region_files)
state_data <- data.frame(usps=sub("\\.pdf", "", state_files), file=state_files)
state_data <- merge(st_lookup[c("name","usps")], state_data, by="usps")

final <- list(metro=metro_data, state=state_data, region=region_data)
json <- toJSON(final)

writeLines(json, "/home/alec/Projects/Brookings/export-nation/2017/all_files.json")

#deprecated now that files are on CDN

urls <- read_excel("/home/alec/Projects/Brookings/export-nation/2017/Export2017URL.xlsx")

json <- toJSON(urls)

writeLines(json, "/home/alec/Projects/Brookings/export-nation/2017/urls.json")


