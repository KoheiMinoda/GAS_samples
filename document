function myFunction() {

  //ドキュメントの新規作成
  DocumentApp.create('7章 Google Document');

  //アクティブドキュメントの取得
  DocumentApp.getActiveDocument();

  //IDからドキュメントの取得
  DocumentApp.openById(id);

  //URLからドキュメント取得
  DocumentApp.openByUrl(url);

  //ドキュメントのタイトル取得
  const doc = DocumentApp.getActiveDocument();
  console.log(doc.getName());

  //ドキュメントの本文取得
  const doc2 = DocumentApp.getActiveDocument();
  console.log(doc2.getBody());

  //本文領域からテキスト取得
  const doc3 = DocumentApp.getActiveDocument();
  const body = doc3.getBody();
  const text = body.getText();
  console.log(text)
}
