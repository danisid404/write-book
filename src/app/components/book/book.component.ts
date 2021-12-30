import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { ISection } from '../../modals';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  // itemsCollection: AngularFirestoreCollection<ISection>;
  book$: Observable<ISection[]>;
  book: ISection[] = [];

  constructor(
    private firestore: Firestore,
    // private afs: AngularFirestore
  ) {
    this.book$ = this.getBook();

    this.getBook().subscribe((book: ISection[]) => this.book = book);
  }

  ngOnInit(): void {
  }

  getBook(): Observable<ISection[]> {
    const sectionRef = collection(this.firestore, 'sections');
    return collectionData(sectionRef) as Observable<ISection[]>;
  }

}
