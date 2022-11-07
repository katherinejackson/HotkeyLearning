export const onClick = (val) => {
    if (window.itemClicked) {
        window.itemClicked(val)
    } else {
        console.log('The clicked item was ' + val)
    }
}