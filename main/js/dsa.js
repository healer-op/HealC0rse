var d =["1fLUCwctiLkyfOnqJVJAe3zH6BjRLtRAM",
"11LT0LSFCXqt3TAU3MS4DvZCUDLBiMVJS",
"1I94LuLawcLZiexxH4X_8IvicAqQVwy7A",
"1EdPq8f5SjbL7RY6NYVh6B2uvflt0dizN",
"1YwbW1lC4aEAr515YcAzw5zMnrkY6z5Oh",
"1UJf5BN6OLsM3Bzn6h8GkvrIIlq4WxDgN",
"1UwCqH7dsU-MOBFm-qCt3MS3bKFQKzqgB",
"1zWxk-WRGI7P_jtJiwUITSDt5QfBHPxHh",
"1mmEqqV9JK-TYSLRG8sN0ti2J_juYClf3",
"1tKITdQ4X1BR9874tmSho9lX0xiuloqUd",
"1dC-AXu9L7yWI-m2tMFXOpkwCPfrPTdM9",
"174ijbbtufXOyQOpBossYOU-si8rY1tuz",
"11yUYqcBmbXdydf_mjzPNoRzBX0B6aILQ",
"1TRixnCuDqt_5HzquuC8nNg34aJvhguTr",
"181Doi7SZdAtJLfjufsYnvcLiJXWShKEi",
"1keJ8izjqxsdcDmhR-5SZVwGf6La3OTum",
"1lAGWA7GHT0KCPSLDGBxo-NSJb73mL5UY",
"1TBBFDSJbZLglMPIFUgec2v9xgO_2FqN9",
"1jZn5sO-4MzztVg7NZmDIIkLUevLLCviZ",
"1fFXBPGvCFj188sPr1xyECjJFp8bxbnaI",
"1-Uj97tJ9Oz0XxlN9IRyyNIdzuqMQP7pB",
"1zITIBxqZ1_H0kWHZ_bQzA4xk6trIEao2",
"1QUgyg7BLzaW2YRFw9RER8i93E-ZpZJL8",
"1aVN3hVVZydOKrOw3Qs3RLS1OiMa13qZz",
"1v8hQz1bmw_PknYVzlDG_WNDVefl5SUGr",
"1b5hkVSDfdIRqddr5GIhYH1t-_chPbbu4",
"1kzDUoyQEw3c9o-9iLLr9-cuDCrZoESrU",
"19cEFISzR6_NY_qCwIEc445uMe9jEvdTS",
"1Od1xF-6PjV6MncUtESVRbpwbCeK34tdC",
"1c3DRCYt73JT2UzCSJxnmNEaints8WFSp"];

var d1 =["DSA JAVA - 1",
"DSA JAVA - 2",
"DSA JAVA - 3",
"DSA JAVA - 4",
"DSA JAVA - 5",
"DSA JAVA - 6",
"DSA JAVA - 7",
"DSA JAVA - 8",
"DSA JAVA - 9",
"DSA JAVA - 10",
"DSA JAVA - 11",
"DSA JAVA - 12",
"DSA JAVA - 13",
"DSA JAVA - 14",
"DSA JAVA - 15",
"DSA JAVA - 16",
"DSA JAVA - 17",
"DSA JAVA - 18",
"DSA JAVA - 19",
"DSA JAVA - 20",
"DSA JAVA - 21",
"DSA JAVA - 22",
"DSA JAVA - 23",
"DSA JAVA - 24",
"DSA JAVA - 25",
"DSA JAVA - 26",
"DSA JAVA - 27",
"DSA JAVA - 28",
"DSA JAVA - 29",
"DSA JAVA - 30"]

var j=0;
const html = d.map((img, i) =>{
    var lv = d[i];
    var lb = lv;
    
    return `
            <div class="col-sm-6">
                <div class="card text-white bg-dark mb-3">
                  <div class="card-body">
                    <h5 class="card-title">${d1[i]}</h5>
                    <p class="card-text">
                    Learn ${d1[i]}
                    </p>
                    <a href="dsa.html?link=${lv}" class="btn btn-light">Watch Now</a>
                  </div>
                </div>
              </div>`;
    j++;
}).join('');
document.querySelector("#row").insertAdjacentHTML("afterbegin", html);

const params = new URLSearchParams(document.location.search);
var link = params.get("link");
document.getElementById("frame").src = `https://hmmm.eu.org/embed.html?fileId=${link}`
for(var k=0;k<d1.length;k++){
    if(link ==d[k]){
        document.getElementById("watch").innerHTML = `Watching Java/${d1[k]}`
    }
}