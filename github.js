class Github {
  constructor() {
    this.client_Id = "d369dd32d3d2d62bcaaa";
    this.client_Secret = "fc5eb46d765439559892c03a5c1c0cde9ec76a68";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id = ${this.client_Id} & client_secret=${this.client_Secret} `);
   const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos 
    };
  }
}
