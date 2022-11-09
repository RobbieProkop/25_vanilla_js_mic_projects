// github class
class GitHub {
  constructor() {
    this.confid = {
      headers: {
        // token expires nov 27, 2022
        Authorization:
          "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", //"YOUR TOKEN HERE"
      },
    };

    this.repos_count = 5;
    this.repos_sort = "created: asc";
    //THIS SHOULD BE CHANGED TO AN ENV VARIABLE
    // this.client_id = "955dd0b264c4762d96fb";
    // this.client_secret = "5d130b92f42fa4b6639d21c7d6007ec0a58d580d";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
      // `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
