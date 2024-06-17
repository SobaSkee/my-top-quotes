document.querySelectorAll('.grid li img').forEach(image =>{
    image.onclick = () =>{
        var existingQuote = document.querySelector('.enlarged .content .quote-div');
        var quoteDiv = document.createElement('div');
        var contentDiv = document.querySelector('.enlarged .content');
        var img = document.querySelector('.enlarged .content img');

        if (existingQuote) {
            existingQuote.parentNode.removeChild(existingQuote);
        }

        imgPath = image.getAttribute('src');
        img.src = imgPath.substr(0, imgPath.length-4) + "_colored.jpg";

        document.querySelector('.enlarged').style.display = 'block';

        quoteDiv.className = "quote-div";

        contentDiv.appendChild(quoteDiv);

        var quote = document.createElement('p');
        quoteDiv.appendChild(quote);

        // determine what quote goes into div
        if (image.getAttribute('id') === 'img1') {
            quote.innerHTML = "\"An <strong>eye</strong> for an <strong>eye</strong> only ends up making the whole world <strong>blind</strong>.\"<br><br>~Mahatma Gandhi";
        }
        else if (image.getAttribute('id') === 'img2'){
            quote.innerHTML = "\"You should enjoy the little <strong>detours</strong> to the fullest. Because that's where you'll find the things more important than what you want.\"<br><br>~Yoshihiro Togashi, Hunter x Hunter, Vol. 32 ";
        }
        else if (image.getAttribute('id') === 'img3'){
            quote.innerHTML = "\"To sum up what <strong>mamba </strong>mentality is, it means to be able to constantly try to be the best version of yourself.\"<br><br>~Kobe Bryant";
        }
        else if (image.getAttribute('id') === 'img4'){
            quote.innerHTML = "\"Work <strong>smarter</strong> not harder.\"<br><br>~Scrooge McDuck, DuckTales 1987";
        }
        else if (image.getAttribute('id') === 'img5'){
            quote.innerHTML = "\"My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is <strong>time</strong>.\"<br><br>~Steve Jobs";
        }
        
    }
});

document.querySelector('.enlarged span').onclick = () =>{
    document.querySelector('.enlarged').style.display = 'none';
}

