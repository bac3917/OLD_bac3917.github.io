# The Artist resource represents a person in the Discogs database who contributed to a Release in some capacity.
library(jsonlite) library(DT);library(magrittr);library(dplyr);library(ggplot2)

MONKreleases<-fromJSON("https://api.discogs.com/artists/145256/releases")        
MONKreleases
plot(MONKreleases$releases$year)
