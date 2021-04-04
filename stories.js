const stories = [
  {
    title: 'Mission Statement',
    words: [
      'Adjective',
      'Verb 1',
      'Verb 2',
      'Plural Noun 1',
      'Plural Noun 2',
      'Plural Noun 3'
    ],
    output: function (words) {
      return `<p>Our mission is to <span class="word">${words['Verb 1']}</span> our <span class="word">${words['Plural Noun 2']}</span> with <span class="word">${words.Adjective}</span> <span class="word">${words['Plural Noun 3']}</span> that will <span class="word">${words['Verb 2']}</span> their <span class="word">${words['Plural Noun 1']}</span>.</p>`
    }
  },
  {
    title: 'Lunch Room!',
    words: [
      'Animal',
      'Adjective 1',
      'Adjective 2',
      'Vegetable 1',
      'Vegetable 2',
      'Noun',
      'Container'
    ],
    output: function (words) {
      return `<p>Make sure your lunch <span class="word">${words.Container}</span> is filled with <span class="word">${words['Adjective 1']}</span> food. Do not go to the <span class="word">${words['Adjective 2']}</span> food stand across the street from the school. The hamburgers they serve are fried in <span class="word">${words.Noun}</span> and are made of <span class="word">${words.Animal}</span> meat. So take a sandwich made of <span class="word">${words['Vegetable 1']}</span> or <span class="word">${words['Vegetable 2']}</span>, it's much healthier!</p>`
    }
  },

  {
    title: 'Weather Report',
    words: [
      'Adjective 1',
      'Adjective 2',
      'Article of Clothing',
      'Number 1',
      'Number 2',
      'Plural Noun 1',
      'Plural Noun 2'
    ],
    output: function (words) {
      return `<p>Early tomorrow, a <span class="word">${words['Adjective 1']}</span> front will collide with a mass of hot <span class="word">${words['Plural Noun 1']}</span> moving from the north. This means we can expect <span class="word">${words['Adjective 2']}</span> winds and occasional <span class="word">${words['Plural Noun 2']}</span> by late afternoon. Wind velocity will be <span class="word">${words['Number 1']}</span> miles an hour, and the high temperature should be around <span class="word">${words['Number 2']}</span> degrees. So, if you're going out, you had better plan on wearing your<span class="word"> ${words['Article of Clothing']}</span>.</p>`
    }
  }
]
  //Starting my Javascript
  //Inputting the "select the following words" string into my heading element to display after a story is picked.
const enterStory = (idx) => {   
  document.getElementById("heading").innerHTML = "Provide the following words"

  //inputting container with form
  const container = document.getElementById("container")
  container.innerHTML = ""
  const form = document.createElement("form")

  // form.addEventListener("submit", function(event) {
  //     event.preventDefault()
  //     container = ""
  // Event Listener for the submit
  form.addEventListener("submit", function(){event.preventDefault();
      document.getElementById("heading").innerHTML = ""
      console.log(event)
      const object = {

      }

  // for loop to display the words into the sentance
      for(let i = 0; i < stories[idx].words.length; ++i){
          object[stories[idx].words[i]] = `<u>${document.getElementById(stories[idx].words[i]).value}</u>`
      }

  // Snaggin elements from the story that is selected.
      container.innerHTML = ""

      const h1 = document.createElement("h1")
      h1.innerText = `${stories[idx].title}`
      container.appendChild(h1)

      const h2 = document.createElement("h2")
      h2.innerHTML = stories[idx].output(object)
      container.appendChild(h2)

      const button = document.createElement("button")
      button.innerText = "Create another story"
      button.addEventListener("click", printStories)
      container.appendChild(button)
  })
  //Put the words in the sentance
  container.appendChild(form)
  for(let i = 0; i < stories[idx].words.length; ++i){
      const input = document.createElement("input")
      input.setAttribute("placeholder", stories[idx].words[i]);
      input.setAttribute("type", "text");
      input.setAttribute("id", stories[idx].words[i])
      container.firstChild.appendChild(input)
  }
  //When you hit submit button, read out the story
  const input = document.createElement("input")
  input.setAttribute("type", "submit")
  input.setAttribute("value", "Read Story")
  container.firstChild.appendChild(input)
  }
  //
  const printStories = () => {
  const container = document.getElementById("container")
  while(container.firstChild){
      container.removeChild(container.lastChild)
  }
  //Choose a story heading followed by the story buttons, when clicked they bring you to the story selected.
  document.getElementById("heading").innerHTML = "Choose a story"
  for(let i = 0; i < stories.length; ++i){
      const button = document.createElement("button")
      button.innerText = `${stories[i].title}`
      button.addEventListener("click", function(){
          enterStory(i)
      })
      container.appendChild(button)
  }
}
  //display the stories
printStories();