fetch("https://restcountries.com/v3.1/all")
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        data.forEach(element => {
            const flagBegin = '<a href="" class="flag">';
            const flagImg = '<img src=' + element.flags.svg + '>';
            const flagName = '<div class="desc"> <h4 class="countryName">' + element.name.common + '</h4>';
            const flagPop = '<div> Population: <span>' + element.population + '</span></div>';
            const flagRegion = '<div> Region: <span class="regs">' + element.region + '</span></div>';
            const flagCapital = '<div> Capital: <span>' + element.capital + '</span></div> </div>';
            const flagEnd = '</a>';
            const html = [
                flagBegin,
                flagImg,
                flagName,
                flagPop,
                flagRegion,
                flagCapital,
                flagEnd
            ].join("");
            document.querySelector('#flags').insertAdjacentHTML('beforeend', html);
        });
    })
    .catch(error => {
        console.log("An error occured");
    })

const countryname = document.getElementsByClassName("countryName");
const search = document.querySelector("#searchText");
search.addEventListener('input', function () {
    Array.from(countryname).forEach(country => {
        console.log(country.innerHTML);
        console.log(search.value);
        if (country.innerHTML.toLowerCase().includes(search.value.toLowerCase())) {
            country.parentElement.parentElement.style.display = "flex";
            country.parentElement.parentElement.style.flexDirection = "column";
        }
        else {
            country.parentElement.parentElement.style.display = "none";
        }
    })
})