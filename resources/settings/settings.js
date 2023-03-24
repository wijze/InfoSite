function ResetAll(){
    if (confirm("Weet je zeker dat je alles wil resetten?")){
        localStorage.clear()
        location.reload()
    }
}