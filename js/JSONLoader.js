const loadNews = (path) => {
    axios.get(path)
        .then(resp => {
            const { data } = resp;
            const listNews = document.getElementById("list-news");

            data.forEach(item => {
                listNews.innerHTML += `
                    <div class="col-xs-12 col-md-6 col-lg-3 mb-4">
                        <div class="card">
                            <a href="${item.link}">
                                <img loading="lazy" src="${item.photo}" class="card-img-top" alt="Новина">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">
                                    <a href="${item.link}">${item.text}</a>
                                </h5>
                                <p class="card-text">${item.published}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    )
};