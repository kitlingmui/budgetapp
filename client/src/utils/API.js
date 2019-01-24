import axios from "axios";


// Creat budget for user
export const createBudget = function(budgetData) {
        return axios.post("/api/createbudget", budgetData)
}

// Gets All budget  
export const getBudget = function() {
    return axios.get("/api/getbudget/")
}

// Deletes the expense with the given id
export const deleteExpense = function(id) {
    return axios.delete("/api/deletexpense/" + id)
}

// Update the expense with the given id
export const updateExpense = function(id) {
    return axios.put("/api/updateexpense/" + id)
}

// Get My budget for selected month year
export const getmyBudget = function( username, month, year ) {
    return axios.get("/api/getmybudget/" + username + "/" + month + "/" + year)
}