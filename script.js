let today = 'wednesday';
let sunnyDay = 'false';

if(today === 'monday')
{
    console.log("Here we go again...")
}else if (today === 'tuesday') {
    console.log('Are we done yet?')
}else if (today === 'wednesday' || today === 'thursday')
{
    console.log("Getting a bit excited...")
}else if (today === 'friday' && sunnyDay) {
    console.log("I hope it stays sunny this weekend")
}else {
    console.log('weekend is almost here!')
}