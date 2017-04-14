(function () {
    angular
        .module("BookHubMaker")
        .factory("SellerBooksService",SellerBooksService);

    function SellerBooksService($http) {
        var api={
            "findAllBooks":findAllBooks,
            "findBooksByName":findBooksByName,
            "createBook":createBook,
            "findBooksByUserId":findBooksByUserId,
            "deleteBookService":deleteBookService,
            "updateBookService":updateBookService
        };
        return api;


        function updateBookService(book,userId) {
            return $http.put("/api/sellerbook?userId="+userId,book);
        }

        function deleteBookService(bookId,userId) {
            return $http.delete("/api/sellerbook?bookId="+bookId+"&userId="+userId);
        }

        function createBook(book) {
            alert("in seller");
            return $http.post("/api/sellerbook",book);
        }

        function findBooksByUserId(userId) {
            return $http.get("/api/sellerbook?userId="+userId);
        }

        function findAllBooks(){
            return $http.get("/api/sellerbook");
        }

        function findBooksByName(bookName){
            return $http.get("/api/sellerbook?bookName="+bookName);
        }
    }

})();
