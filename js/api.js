
async function fillTheTitle() {
    const post = await fetch("https://omega.cyclic.app/soccer").then((res) => res.json());
    console.log(post)
  }
  fillTheTitle();