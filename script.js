function highlight() {
    //Write your code here
	const elements=document.querySelectorAll('strong');
	for(const element of elements)
		{
			const textWrapper=document.createElement('span');
			textWrapper.textContent=element.textContent;
			element.textContent=""
			textWrapper.style.color='rgb(0,128,0)';
			element.appendChild(textWrapper);
			
		}
	
    //Write your code here

    
}
function return_normal() {
		const blackElements=document.querySelectorAll('strong');
		for(const element of blackElements)
			{
				const textWrapper=element.querySelector('span');
				if(textWrapper)
				{
					element.textContent=textWrapper.textContent;
				}
				
			}
	
}
const highlightLink = document.getElementById('highlightLink');
highlightLink.addEventListener('mouseover', highlight);
highlightLink.addEventListener('mouseout', return_normal);
