var newItemCounter = 1
var ourList = document.getElementById('our-list')
var ourButton = document.getElementById('ourButton')
var ourHeadLine = document.getElementById('headLine')
var listItems = document.getElementById('our-list').getElementsByTagName('li')

ourList.addEventListener('click', activateItem)

function activateItem(e){
	if ( e.target.nodeName == 'LI' ){
	ourHeadLine.innerHTML = e.target.innerHTML
	for (i = 0; i < e.target.parentNode.children.length; i++) {
		e.target.parentNode.children[i].classList.remove('lime')
	}
		e.target.classList.add('lime')
	}	
}

ourButton.addEventListener('click', createNewItem)

function createNewItem(){
	ourList.innerHTML += '<li>Something ' + newItemCounter + '</li>'
	newItemCounter++

}