import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, query, doc, setDoc } from '@angular/fire/firestore';
import { firstValueFrom, from, map, Observable } from 'rxjs';
import { Estoque } from '../models/estoque.model';
import { getDoc, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AutomacaoService {

  private collectionName = 'automacao';

  constructor(private firestore: Firestore) {}

  buscarPorId(id:string): Observable<Estoque> {

    const promise = getDoc(doc(this.firestore, this.collectionName, id));

    return from(promise.then((snapshot) => {
      if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() } as Estoque;
      } else {
        throw new Error('Documento não encontrado');
      }
    }));

  }

}
