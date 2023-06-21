import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slideIndex = 1;
  

  plusSlides(n:number){
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n:number){
    this.showSlides(this.slideIndex = n);
  }

  showSlides(slideIndex:number):any;
  showSlides(n:number){
    let i;
    let slides = document.getElementsByClassName("slides") as HTMLCollectionOf<HTMLDivElement>;
    let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLSpanElement>;
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if(slides[this.slideIndex-1])
    slides[this.slideIndex-1].style.display = "block";
    if(dots[this.slideIndex-1])
    dots[this.slideIndex-1].className += " active";
  }
}

