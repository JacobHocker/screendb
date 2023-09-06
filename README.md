# Screen DB
> The one stop shop for all entertainment needs.

### [Linked In](https://www.linkedin.com/in/jacobhocker/) 

### [Portfolio](https://jacob-hocker.vercel.app/)

### [Medium](https://jacobhocker.medium.com/)
 

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./src/assets/screenDB-white.png">
  <source media="(prefers-color-scheme: light)" srcset="./src/assets/screenDB-black.png">
  <img alt="Shows an black logo in light mode and  white logo in dark mode." src="/src/assets/screenDB-white.png">
</picture>

## Fully Resposive w/ Dark & Light Mode
> Mobile Dark Mode

![Screen DB Mobile & Dark View](/src/assets/screendb-mobile-dk-readme.png)

> Tablet Light Mode

![Screen DB Mobile & Dark View](/src/assets/screendb-tablet-lt-readme.png)

> Desktop Dark Mode

![Screen DB Mobile & Dark View](/src/assets/screendb-desktop-dk-readme.png)

## Application Information

### Built With:
- NextJS
- TailwindCSS
- TMDB The Movie Database

### Styling Features:
- Responsive for Mobile, Tablet, and Desktop.
- Light & Dark Mode.

# Application Features

> NOTE: All search bars are search by title or name.


## Home Page - */*
- See the top trending in all categories of the day or week.
- Each card is linked to each trending person, movie, or tv show.

## Movies -  */movies* 
> Display of trending movie cards and movie searches.

- Displays 20 movie cards with pagination based on the category.
- Categories in the drop down under the search bar are `Top Rated`, `Now Playing`, and `Popular`.
- Search Bar that queries through the entire movie database.

## Movie - */movie/${movieId}*
> All movie information is displayed on this page.

- Title
- Summary
- Release Date
- Audience Rating
- Budget
- Revenue
- Runtime
- Genres
- Cast Carousel (Person Link)
- Crew Carousel (Person Link)
- Collection (Only movies in a collection or series)
- Production Companies
- Related Movies (Movie Link)

## People -  */people* 
> Display of trending people and returns of people searches.

- Displays 20 trending person cards.
- Search Bar that queries through the entire person database.

## Person -  */person/{personId}* 
> Display of the entire overview of the person.

- The person can be:
  - Actor/Actress
  - Director
  - Producer
  - Or any member of crew
- Name
- Biography
- Birthday
- Birth Place
- Social Links
- Movies Known For (Movie Links)
- Television Known For (TV Link)
- Other photographs of the person (if available)


## Television Shows -  */tvShows* 
> Display of trending TV cards and TV searches.
- Displays 20 tv show cards with pagination based on the category.
- Categories in the drop down under the search bar are `Top Rated` and `Popular`.
- Search Bar that queries through the entire TvShow database.

## TV Show - */tv/{tvShowId}*
> All top level information is displayed on this page for the TV Show.

- Title
- Summary
- Production Status
- Episode & Season Counter
- Last Air Date
- Created By
- Seasons (Season Link)
- Genres
- Related TV Shows (Tv Show Links)

## TV Seasons - */tv/{tvShowId}/seasons*
> The only way to reach this page is to go on the TV Shows page and click the TV Seasons link image.

- Season list display (Season Link)
- Minor summary 
- Episode count per season
- Last Air Date

## TV Season - */tv/{tvShowId}/seasons/{seasonId}*
> Overview of the season 

- Season Number
- Summary
- First Air Date
- Number of Episodes
- Season Episodes (Episodes Link)
- Cast Carousel (Person Link)
- Crew Carousel (Person Link)
- Other Seasons Carousel (Season Link)

## Episodes List - */tv/{tvShowId}/seasons/{seasonId}/episodes*
> List of all the episodes im the season

- Episode Title
- Episode Run Time
- Summary
- Air Date

## Episode- */tv/{tvShowId}/seasons/{seasonId}/episodes/{episodeId}*
> Overview of the episode

- Episode Title
- Summary
- Air Date
- Run Time
- Main Cast List (Person Link)
- Guest Star List (Person Link)
- Crew List (Person Link)
- Other Episode List (Episode Link)


# Socials
