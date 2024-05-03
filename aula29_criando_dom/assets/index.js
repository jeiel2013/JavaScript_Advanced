const subTitleEl = document.createElement("h2");
subTitleEl.innerHTML = "Projetos";

const pjListEl = document.createElement("ul");

const pjListItem1El = document.createElement("li");
pjListItem1El.innerHTML = "TODO MVC";

const pjListItem2El = document.createElement("li");
pjListItem2El.innerHTML = "Github API";

const pjListItem3El = document.createElement("li");
pjListItem3El.innerHTML = "eCommerce";

pjListEl.append(pjListItem1El);
pjListEl.append(pjListItem2El);
pjListEl.append(pjListItem3El);

document.body.append(subTitleEl);
document.body.append(pjListEl);

for (let i = 0; i < 3; i++) {
    pjListItem3El.innerHTML = `eCommerce ${i}`
};