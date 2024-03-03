export default function filterPostOffices(arr, query) {
    return arr.filter( item => item.Name.toLowerCase().includes(query.trim().toLowerCase()));
}