# Namaste React


# Parcel ( What will it do)


- Dev Build
- Local Server
- Automatically refereshing our page 
  (HMR)= Hot Module Replacement
- It uses File Watching Algorithm -    written in c++
- Caching - Faster Builds . helps to build in small time
- Code splitting 
- Differential Bundling == support older browser
- Tree Shaking = remove unused code

# what we have not to place in github 
1 - node Module
2 - .parcel-cache
3 - /dist


### Food Ordering App
/**
 * Header
 * logo
 * nav items
 * search
 * RestaurantContainer
 * RestaurantCard
 * --Image
 * -Name of Res , Star rating , cuisine , delievery time
 * footer
 * copyright
 * Link
 * Address 
 * Contact
 */


 // There are two types of export and import 

 export default component;
 import component from "path";

- Named export/import

export const component;
import {component} from "path";


// REACT HOOKS

(Normal JS Utility Function written by FB developers)
when we write npm install parcel , then we will get all these utility function in our node module

-useState() == used for genrating superpowerful state variable in react
-useEffect()


# 2 types of Routing
- Client Side Routing == we are not making a network call because all the coponents are already loaded in our App

- Server Side Routing == there are index.html . suppose we want / about , so it will go to index.html and it will make data call and fetch data and reload the page 



- Parent Constructor
- Parent Render

  - First Constructor
  - First Render

  - Second Constructor
  - Second Render

  after this Diff is calculated , reconsillation Occur and after that it is batched and DOM is updated

  <DOM UPDATED - In Single Batch >
  - First ComponentDidMount
  - Second ComponentDidMount

- Parent ComponentDidMount



# Redux Toolkit
- Install @reduxjs/Toolkit and react -redux
- Build our store 
- Connect our stote to our app 
- Slice ( cart slice )
- Dispatch (action)
- Selector 
 