import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { validateHeaderName } from 'http';
import { datafake } from '../../data/datafake'


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  title: string = ""
  image: string = ""
  description = ""

  private id: null | string  ="0"

  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe( value=>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = datafake.filter(
      article => article.id.toString()== id) [0]

      this.title = result.title;
      this.image = result.photo;
      this.description = result.description;

      
  }
}
