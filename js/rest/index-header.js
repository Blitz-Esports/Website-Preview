/*
this.body.addEventListener("pageLoaded", async () => {

    const headerData = await this.graphql(`
    query MyQuery {
        headers {
          id
          url
          title
          imageFromThumbnail
        }
      }       
    `);


    headerData.forEach((hData, i) => {
        const { url, title, imageFromThumbnail, buttonText } = hData;
        const thumbnail = imageFromThumbnail ? imageFromThumbnail[0].url ? imageFromThumbnail[0].url : "" : "";

        const headerTitle = document.getElementById(`header-title-${i + 1}`);
        const headerThumbnail = document.getElementById(`header-thumbnail-${i + 1}`);
        const headerButtonText = document.getElementById(`header-button-text-${i + 1}`);
        const headerButtonUrl = document.getElementById(`header-button-url-${i + 1}`);

        headerTitle.innerText = title || "Lol";
        headerThumbnail.style = `background-image: url(${thumbnail})`;
        headerButtonText.innerText = buttonText || "Lol";
        headerButtonUrl.href = url;

    });

});
*/