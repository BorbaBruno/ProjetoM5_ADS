import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.page.html',
  styleUrls: ['./recovery-password.page.scss'],
})
export class RecoveryPasswordPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) { }

  sair() {
    this.router.navigate(['/home']);
  }

  async enviarSolicitacao() {
    const toast = await this.toastController.create({
      message: 'Solicitação enviada!',
      duration: 2500,
      position: 'top'
    });
  
    toast.present();
  }

  ngOnInit() {
  }

}
