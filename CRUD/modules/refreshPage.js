export function refreshPage(event, from){
    event.preventDefault();

    // const dataF = new dataF(this);

    this.querySelectorAll(form).forEach(element => {
        element.value = ''
    });
}

