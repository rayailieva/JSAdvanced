function solve(array, criteria) {

    let sortingCriteria = {
        'asc': sortAscending,
        'desc': sortDescending,
    };

    function sortAscending(a, b) {
        return a - b;
    }

    function sortDescending(a, b) {
        return b - a;
    }

    return array.sort(sortingCriteria[criteria])
}