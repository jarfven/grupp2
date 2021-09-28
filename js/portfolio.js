const portfolio = () => {
  const output = document.querySelector('#portfolioEntryPoint')

  fetch('../project.xml')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser()
      const xml = parser.parseFromString(data, 'text/xml')
      renderXml(xml)
    })
  .catch(console.error)

  const renderXml = (xml) => {
    const projects = xml.getElementsByTagName('project');

    for (var i = 0; i < projects.length; i++) {
      const container = document.createElement('article')

      const innerContainer = document.createElement('div')

      const img = getNodeValue(projects[i], 'image')
      const title = getNodeValue(projects[i], 'title')
      const desc = getNodeValue(projects[i], 'description')
      const customer = getNodeValue(projects[i], 'customer')

      const imgTag = document.createElement('img')
            imgTag.setAttribute('src', img)
            imgTag.setAttribute('alt', customer)

      const titleTag = document.createElement('h3')
            titleTag.textContent = title

      const descTag = document.createElement('p')
            descTag.textContent = desc

      const linkContainer = document.createElement('div')
            linkContainer.className = 'portfolioLinks'

      const goToPage = '<svg width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#DCC9B6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="1" /><line x1="4" y1="8" x2="20" y2="8" /><line x1="8" y1="4" x2="8" y2="8" /></svg>'
      const goToPageLink = document.createElement('a')
            goToPageLink.innerHTML = goToPage

      const github = '<svg width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#DCC9B6" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>'
      const githubLink = document.createElement('a')
            githubLink.innerHTML = github

      linkContainer.append(goToPageLink, githubLink)

      innerContainer.append(titleTag, descTag)
      container.append(imgTag, innerContainer, linkContainer)

      output.append(container)
    }
  }

  const getNodeValue = (obj, tag) => {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue
  }
}

portfolio()