import { server } from "./server"

const form = document.querySelector("#form")
const content = document.querySelector("#content")
const input = document.querySelector("#url")


form.addEventListener("submit", async (event)=> {
    event.preventDefault()
    const url = input.value
    if (url === "" || !url.includes("shorts")) {
        alert("Please enter a URL")
        return
    }
    const [_,idShorts] = url.split("/shorts/")
    const [id] = idShorts.split("?")
    
    content.textContent = "Loading..."

    //alert("Form submitted!")

    const transcripition = await server.get(`/summary/`+id)

    content.textContent = transcripition.data.result
})
