import { message } from "./lang/en/en.js";

const apiBaseUrl = "https://api.grace-su.com/api/db";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("insertButton").textContent =
        message.insertButtonText;
    document.getElementById("queryInput").placeholder = message.queryPlaceholder;

    document
        .getElementById("insertButton")
        .addEventListener("click", insertSampleData);
    document
        .getElementById("executeButton")
        .addEventListener("click", executeQuery);
});

function insertSampleData() {
    fetch(`${apiBaseUrl}/add`, { method: "POST" })
        .then((response) => response.text())
        .then((data) => {
        document.getElementById("response").innerHTML = data;
        })
        .catch((error) => {
        console.error("Error:", error);
        document.getElementById("response").innerHTML =
            message.errorInsertingSampleData;
        });
}

function executeQuery() {
    const query = document.getElementById("queryInput").value.trim();

    if (query.toUpperCase().includes("SELECT")) {
        // Handle SELECT query
        fetch(`${apiBaseUrl}/${encodeURIComponent(query)}`)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("response").innerHTML = createTable(data);
        })
        .catch((error) => {
            console.error("Error:", error);
            document.getElementById("response").innerHTML =
            message.errorExecutingSelectQuery;
        });
    } else if (query.toUpperCase().includes("INSERT")) {
        // Handle INSERT query
        fetch(`${apiBaseUrl}/insert`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query }),
        })
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("response").innerHTML = data;
        })
        .catch((error) => {
            console.error("Error:", error);
            document.getElementById("response").innerHTML =
            message.errorExecutingInsertQuery;
        });
    } else {
        document.getElementById("response").innerHTML = message.invalidQuery;
    }
}

function createTable(data) {
    if (!data || data.length === 0) return "No data available";

    const headers = Object.keys(data[0]);
    let table = "<table><tr>";

    // Create table headers
    headers.forEach((header) => {
        table += `<th>${header}</th>`;
    });
    table += "</tr>";

    // Create table rows
    data.forEach((row) => {
        table += "<tr>";
        headers.forEach((header) => {
        table += `<td>${row[header]}</td>`;
        });
        table += "</tr>";
    });

    table += "</table>";
    return table;
}
