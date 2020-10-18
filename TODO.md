# Forum
NOTE: Save

### Method1
-   Remove `children` from Forum. It will only accept options.
-   Add the function `setChildren` that will recieve `<ChildrenData>` and return either `CategoriesForum | TopicsForum`. It will check if the provided array has only elements of 1 type, and throw and error otherwise.
-   Create a CategoriesForum & TopicsForum classes. They both extend Forum.
-   PS: The user will only be using `CategoriesForum & TopicsForum` after setting the children.

### Method2
-   Just provide the typeguard to the user, that way he has to check the type everytime he uses the `children` property. Don't forget to add the `errorChecker` in the constructor. 