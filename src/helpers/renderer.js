const { BehaviorSubject } = rxjs;

export const obs1$ = new BehaviorSubject();
obs1$.subscribe((data) => {
  renderData(data);
});

export function renderData(data) {
  const div = document.getElementById("generatedCV");
  div.innerHTML = `
    <div class="CV-first-part">
    <div class="CV-name">
    <p>${data?.firstname || ""}</p>
    <p>${data?.lastname || ""}</p>
    <img src="${data?.photo}" id="CV-image"/>
    </div>
    <div class="CV-basic-info">${data?.basicInfo || ""}</div>
    <p>${data?.email || ""}</p>
    <p>${data?.phone || ""}</p>
    </div>
    <div class="CV-second-part">
    <div class="CV-name">
    <p>${data?.position || ""}</p>
    <p>${data?.employer || ""}</p>
    </div>
    </div>
  `;
}
