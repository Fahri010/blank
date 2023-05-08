import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
})
export class KategoriPage implements OnInit {

  constructor(private router : Router) {}
  home(){
    this.router.navigateByUrl('home');
  }

  ngOnInit() {
  }

}
