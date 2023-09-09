import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar3 from "../components/Navbar3";
import Image from "next/image";
import image1_3 from "../Assets/bab_3_modules/image1_3.jpg"
import image2_3 from "../Assets/bab_3_modules/image2_3.jpg"
import image3_3 from "../Assets/bab_3_modules/image3_3.jpg"
import image4_3 from "../Assets/bab_3_modules/image4_3.jpg"
import image5_3 from "../Assets/bab_3_modules/image5_3.png"
import eclipse2 from "../Assets/eclipse2.png";
import withAuth from '../components/withAuth';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import MuiAlert from '@mui/material/Alert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { storage } from "../lib/firebaseClient";
import logopdf from "../Assets/logopdf.png"
// import PdfViewer from '../components/PdfViewer';

const Ace1_1 = dynamic(() => import("../components/Editor1_1"), { ssr: false });
const AceShiny3_1 = dynamic(() => import("../components/EditorShiny3_1"), { ssr: false });
const AceShiny3_2 = dynamic(() => import("../components/EditorShiny3_2"), { ssr: false });
const AceShiny3_3 = dynamic(() => import("../components/EditorShiny3_3"), { ssr: false });
const pdfPath = 'gs://rwikistatweb.appspot.com/ModulesPDFs/Modul BAB III.pdf';

type ModuleBab3Props = {
  showUnauthorizedAccessWarning?: boolean;
};

const ModuleBab3: React.FC<ModuleBab3Props> = ({ showUnauthorizedAccessWarning = false }) => {
  const [open, setOpen] = useState(showUnauthorizedAccessWarning);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null); 

  const pdfPath = 'ModulesPDFs/Modul BAB III.pdf';

  useEffect(() => {
    const fetchPdfUrl = async () => {
      const url = await storage.ref(pdfPath).getDownloadURL();
      setPdfUrl(url);
    };

    fetchPdfUrl();
  }, []);
  const handleDownload = () => {
    if (pdfUrl) {
      const link: HTMLAnchorElement = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'filename.pdf';  // Give your desired filename here
      link.target = '_blank'; // This will open the link in a new tab
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("No URL available for download");
    }
  };
  useEffect(() => {
    if (!loading && !user) {
      Cookies.set('unauthorized-access', 'You must log in to view this page.');
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (showUnauthorizedAccessWarning) {
      setOpen(true);
    }
  }, [showUnauthorizedAccessWarning]);

  return (
    <>
   <Head>
    <title>Rwikistat-Modules</title>
   </Head>
<Navbar3 />
  <div className="flex flex-col">
    <div className="flex-col pt-10 pl-[50px] pr-[50px] items-center">
        <div className="bg-[#2D7353] drop-shadow-xl text-[22px] text-center pl-4 pr-3 rounded-xl text-white">
          <h1 className="text-[40px]">BAB III </h1>
          <h1 className="text-[40px]">PENYAJIAN DATA</h1>
          <h2 className="font-bold pt-2">Capaian Pembelajaran : </h2>
          <ul className="list-disc text-justify pl-3 pb-3">
            <li>
              Mahasiswa mampu menyajikan data dengan metode yang tepat sehingga data mudah dipahami.
            </li>
            <li>
              Mahasiswa mampu meberikan analisa keputusan awal dari sebuah permasalahan berdasarkan deskriptif statistika.
            </li>           
         </ul>
         <h2 className="font-bold pt-2">Materi</h2>
         <p className="text-justify">
         Data statistika tidak hanya cukup dikumpulkan dan diolah, tetapi juga perlu disajikan dalam bentuk yang mudah dibaca dan dimengerti oleh pengambil keputusan. Penyajian data dalam bentuk tabel atau grafik merupakan cara untuk meringkas informasi dari sekumpulan data, mendapatkan pola, serta memahami apa yang terjadi di dalam data. Terdapat dua cara untuk menyajikan data, yaitu:
         </p>
         <ul className="list-disc text-justify pl-3 pb-3">
            <li>
              Tabel merupakan kumpulan angka-angka yang disusun menurut kategori - kategori.
            </li>
            <li>
              Grafik merupakan gambar-gambar data secara visual dari data yang biasanya berasal dari tabel-tabel yang telah dibuat.
            </li>           
         </ul>
        </div>
    <div className="ml-3 flex bg-white flex-col items-center">  
      <div className="pt-2 pl-3">
      <br />
      <div className="pl-[998px] drop-shadow-xl">
        <button
              onClick={handleDownload}
              className="flex flex-row  item-center mb-4 bg-[#eb3323cc] hover:bg-white hover:text-black hover:border-2 hover:border-black  text-white font-bold py-2 px-4 rounded-lg w-[400px] h-[40px]">
            <Image className="flex mr-2" src={logopdf} alt="logopdf" width={20} /> 
              View and Dowload Module in PDF format
          </button>
        </div>
        <div className="pl-[30px] text-[18px] pr-[40px] pt-7">
          <h2 className="bg-gray-200 border-l-8 border-[#2d7353ac] font-bold pt-3 pb-3 pl-2 text-[21px]">
            3.1	Penyajian dalam Tabel
          </h2>
            <div className="pl-3 pb-6 pt-3">
              <p className="text-justify pl-4 indent-first-line">
                Penyajian data menggunakan tabel dilakukan untuk meringkas informasi dari sekumpulan data. Salah satu caranya adalah menggunakan tabel distribusi frekuensi untuk menampilkan distribusi dari sautu variabel numerik. Pada variabel kategorik, tabel distribusi frekuensi akan menampilkan kategori dan jumlah, proporsi, atau persentase dari setiap kategori. Proporsi dan persentase juga disebut sebagai frekuensi relative yang merangkum distribusi dari variabel kategorik secara numerik (Franklin, Klingenberg, & Agresti, 2017).
              </p>
              <p className="text-justify pl-4 indent-first-line pt-2">
                Contoh aplikasi tabel frekuensi dalam R adalah sebagai berikut.
              </p>
              <p className="text-justify pl-4 pt-2">
               # creating a dataframe
               <br />
               data_table &lt;&ndash; data.table(col1 = sample(6:9, 9, replace = TRUE),
              </p>
              <p className="text-justify pl-[216px]">
                col2 = letters[1 : 3],
              </p>
              <p className="text-justify pl-[216px]">
                col3 = c(1, 4, 1, 2, 2, 2, 1, 2, 2))
              </p>
              <p className="text-justify pl-4 pt-2">
                print ("Original DataFrame") 
               <br />
               print (data_table)
              </p>
              <br/>
              <p className="text-justify pl-4 pt-2">
                Diperoleh data sebagai berikut:
              </p>
              <div className="overflow-x-auto">
                <table className="w-[400px] h-[200px] whitespace-nowrap">
                  <thead>
                    <tr className="text-[14] font-light text-left ">
                    <th className="px-4 py-3"></th>
                    <th className="px-4 py-3">col1</th>
                    <th className="px-4 py-3">col2</th>
                    <th className="px-4 py-3">col3</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y">
                <tr>
                  <td className="px-4 py-3">
                    1:
                  </td>
                  <td className="px-4 py-3">
                    7
                  </td>
                  <td className="px-4 py-3">
                    a
                  </td>
                  <td className="px-4 py-3">
                    1
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    2:
                  </td>
                  <td className="px-4 py-3">
                    7
                  </td>
                  <td className="px-4 py-3">
                    b
                  </td>
                  <td className="px-4 py-3">
                    4
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    3:
                  </td>
                  <td className="px-4 py-3">
                    7
                  </td>
                  <td className="px-4 py-3">
                    c
                  </td>
                  <td className="px-4 py-3">
                    1
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    4:
                  </td>
                  <td className="px-4 py-3">
                    8
                  </td>
                  <td className="px-4 py-3">
                    a
                  </td>
                  <td className="px-4 py-3">
                    2
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    5:
                  </td>
                  <td className="px-4 py-3">
                    8
                  </td>
                  <td className="px-4 py-3">
                    b
                  </td>
                  <td className="px-4 py-3">
                    2
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    6:
                  </td>
                  <td className="px-4 py-3">
                    7
                  </td>
                  <td className="px-4 py-3">
                    c
                  </td>
                  <td className="px-4 py-3">
                    2
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    7:
                  </td>
                  <td className="px-4 py-3">
                    9
                  </td>
                  <td className="px-4 py-3">
                    a
                  </td>
                  <td className="px-4 py-3">
                    1
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    8:
                  </td>
                  <td className="px-4 py-3">
                    9
                  </td>
                  <td className="px-4 py-3">
                    b
                  </td>
                  <td className="px-4 py-3">
                    2
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    9:
                  </td>
                  <td className="px-4 py-3">
                    6
                  </td>
                  <td className="px-4 py-3">
                    c
                  </td>
                  <td className="px-4 py-3">
                    2
                  </td>
                </tr>
                </tbody>
                </table>
              </div>
              <br />
                <p className="text-justify pl-4">
                  Frekuensi dari data pada kolom ke-1 (col 1) adalah sebagai berikut:
                </p>
                <p className="text-justify pl-6 pt-2">
                	freq &lt;&ndash; table(data_table$col1)
                  <br />
                  &lt;print ("Modified Frequency Table")
                  <br />
                  [1]	"Modified Frequency Table"
                  <br />
                  &lt;print (freq) 
                </p>
                <p className="text-justify pl-8">
                  6 7 8 9
                  <br />
                  1 4 2 2  
                </p>
                <p className="text-justify pl-4 pt-3">
                Berdasarkan output di atas diketahui bahwa jumlah angka terbanyak pada col 1 adalah angka 7, yaitu sebanyak empat angka. Sedangkan jumlah angka terkecil pada col 1 adalah angka 6, yaitu sebanyak satu angka.
                <br />
                Frekuensi kumulatif dapat dihitung dengan cara berikut:
                </p>
                <p className="text-justify pl-8 pt-2">
                  &gt;print ("Cumulative Frequency Table")
                  <br />
                  [1] "Cumulative Frequency Table"
                  <br />
                  &gt;	cumsum &ls;&ndash; cumsum(freq)
                  <br />
                  &gt;print (cumsum) 
                </p>
                <p className="text-justify pl-10">
                  6 7 8 9
                  <br />
                  1 4 2 2  
                </p>
                <p className="text-justify pl-4 pt-3">
                  Frekuensi kumulatif menunjukkan frekuensi data terakhir merupakan jumlahan dari banyaknya data sebelumnya. Oleh karena itu, frekuensi data terakhir dihitung dari 1 + 4 + 2 + 2 = 9.
                </p>
                <p className="text-justify pl-4">
                Frekuensi relatif (proporsi) dapat dihitung dengan cara berikut.
                </p>
                <p className="text-justify pl-8">
                &gt;print ("Relative Frequency Table")
                <br />
                [1] "Relative Frequency Table"
                <br />
                &gt;	prob &lt;&ndash;prop.table(freq)
                <br />
                &gt;	print (prob)
                </p>
                <div className="overflow-x-auto">
                  <table className="w-[200px] h-[50px] whitespace-nowrap">
                  <thead>
                    <tr className="text-[14] font-light text-right ">
                    <th className="px-4 py-3">6</th>
                    <th className="px-4 py-3">7</th>
                    <th className="px-4 py-3">8</th>
                    <th className="px-4 py-3">9</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                <tr>
                  <td className="px-4 py-3">
                  0.1111111 
                  </td>
                  <td className="px-4 py-3">
                  0.4444444 
                  </td>
                  <td className="px-4 py-3">
                  0.2222222 
                  </td>
                  <td className="px-4 py-3">
                  0.2222222
                  </td>
                </tr>
                </tbody>
                </table>
                </div>
                <p className="text-justify pl-4 pt-3">
                Frekuensi relative atau proporsi menunjukkan persentase dari banyaknya suatu data dibagi dengan banyak semua data. Oleh karena itu, proporsi angka 6 dalam ada adalah sebesar 1/9 = 0,111, proporsi angka 7 adalah 4/9 = 0,444, begitu seterusnya untuk angka 8 dan 9.
                </p>
                <p className="text-justify pl-4 indent-first-line">
                Pada variabel kuantitatif (numerik), tabel distribusi frekuensi digunakan untuk mengelompokkan data interval/rasio dan menghitung banyaknya data dalam satu kelompok/klasifikasi. Langkah-langkah membuat tabel distribusi frekuensi untuk variabel numerik adalah sebagai berikut:
                </p>
                <ul className="list-disc text-justify pl-14 pb-3">
                  <li>
                    Hitung sebaran (range) yaitu selisih antara nilai data terbesar dan terkecil, range= xmax – xmin.
                  </li>
                  <li>
                    Tentukan banyaknya kelas (k) dengan rumus k = 1 + 3,3 log n.
                  </li>
                  <li>
                    Tentukan panjang kelas (p) dengan rumus p = sebaran / banyak kelas.
                  </li>
                </ul>
                <p className="text-justify pl-4 pt-3">
                  Berikut adalah contoh penggunaan tabel distribusi frekuensi untuk variabel numerik.
                </p>
                <p className="text-justify pl-8 pt-3">
                  data_frame &lt;&ndash;data.frame(col1 = c(1,3,5,6,23,6,2,5,7,
                </p>
                <p className="text-justify pl-[295px]">
                  16,8,9,36,7,12,1,
                  <br />
                  6,4,14,23,19,18,
                  <br />
                  14,2,20,30))
                </p>
                <p className="text-justify pl-8 pt-3">
                  print("Original Data") 
                  <br />
                  print(data_frame)
                </p>
                <p className="text-justify pl-4 pt-3">
                  Interval antar kelas ditentukan sebesar 5 dengan perintah berikut:
                </p>
                <p className="text-justify pl-8 pt-4">
                  # creating intervals between 1 to 30 with a gap of 5 each 
                  <br />
                  interval_table &lt;&ndash;table(cut(data_frame$col1,seq(1,30,5))) 
                  <br />
                  print("Data in Intervals")
                  <br />
                  print(interval_table)
                </p>
                <p className="text-justify pl-4 pt-3">
                Diperoleh output sebagai berikut.
                </p>
                <p className="text-justify pl-8 pt-3">
                &gt;	print(interval_table)
                </p>
                <div className="overflow-x-auto">
                  <table className="w-[200px] h-[50px] whitespace-nowrap">
                  <thead>
                    <tr className="text-[14] font-light text-right ">
                    <th className="px-4 py-3">(1,6]</th>
                    <th className="px-4 py-3">(6,11]</th>
                    <th className="px-4 py-3">(11,16]</th>
                    <th className="px-4 py-3">(16,21]</th>
                    <th className="px-4 py-3">(21,26]</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                <tr className="text-right">
                  <td className="px-4 py-3">
                  9
                  </td>
                  <td className="px-4 py-3">
                  4 
                  </td>
                  <td className="px-4 py-3">
                  4 
                  </td>
                  <td className="px-4 py-3">
                  3
                  </td>
                  <td className="px-4 py-3">
                  2
                  </td>
                </tr>
                </tbody>
                </table>
                </div>
                <p className="text-justify pl-8 pt-3">
                  Berdasarkan output di atas, diketahui bahwa telah terbentuk kelompok dengan interval sebesar
                  5. Dari kelompok tersebut, frekuensi terbesar terletak pada interval (1,6] dan frekuensi terkecil berada pada interval (21, 26].
                </p>
                <p className="text-justify pl-4 indent-first-line">
                  Penyajian data menggunakan grafik disebut juga sebagai visualisasi data, yaitu mengubah informasi atau data ke dalam bentuk gambar atau grafik yang dapat menunjukkan distribusi, pola, dan trend dari data. Tujuan dari visualisasi data adalah untuk menceritakan suatu kejadian (data stories) atau menjawab suatu persoalan dengan memilih informasi yang
                  sesuai dari sekumpulan data untuk menonjolkan cerita tersebut (Pearson, 2018). Penggunaan grafik untuk visualisasi data sangat ditentukan oleh tipe data yang digunakan. Berikut adalah beberapa fungsi grafik yang dapat digunakan dalam perangkat lunak R.
                </p>
            </div>
          <h2 className="bg-gray-200 border-l-8 border-[#2d7343ac]  font-bold pt-3 pb-3 pl-2 text-[21px]">3.2	Penyajian dalam Histogram</h2> 
          <div className="pl-3 pb-6 pt-3">
            <p className="text-justify pl-4 indent-first-line">
              Histogram digunakan untuk mengetahui distribusi dari sekumpulan data kuantitatif (numerik). Histogram menggunakan batang untuk menggambarkan frekuensi atau frekuensi relatif dari data. Histogram lebih baik digunakan pada jumlah data yang besar, sedangkan apabila data berjumlah sedikit, maka gunakan dotplot atau stem-and-leaf untuk melihat distribusi dari data (Franklin et al., 2017; Weiss, 2016).
            </p>
            <p className="text-justify pl-4 indent-first-line">
              Histogram dalam R dapat ditampilkan menggunakan perintah hist() sebagai berikut.
            </p>
            <p className="text-justify pl-8 pt-3">
              #Histogram 
              <br />
              hist(selDarah,
            </p>
            <p className="text-justify pl-14">
              main="Data volume sel per 100 cm3 darah 50 orang wanita", 
              <br />
              xlab="Data volume sel per 100 cm3")
            </p>
            <p className="text-justify pl-4">
              Histogram yang dihasilkan adalah sebagai berikut.
            </p>
            <Image className="flex mx-auto relative pt-2" src={image1_3} alt="image_1" width={500} height={500} />
            <h4 className="text-[16px] text-center pt-2">
              Gambar 1. Histogram
            </h4>
            <p className="text-justify pl-4 indent-first-line">
            Berdasarkan histogram pada Gambar 3, dapat disimpulkan bahwa kurva frekuensinya menjulur ke kiri dimana nilai mean paling kecil dibandingkan dengan nilai median dan modus. Dan berarti bahwa data tidak berdistribusi normal. Namun, untuk melihat kenormalan data dengan histogram belum bisa dijadikan suatu keputusan yang valid untuk menyatakan bahwa data telah mengikuti distribusi normal atau tidak. Agar lebih meyakinkan, perlu dilakukan uji kenormalan data yang akan dipelajari dalam statistika lanjutan.
            <br />
            Berikut adalah bentuk histogram diatas jika disimulasikan dalam bentuk histogram interaktif
            </p>
            <AceShiny3_1 />
            </div>
        <h2 className="bg-gray-200 border-l-8 border-[#2d7343ac]  font-bold pt-3 pb-3 pl-2 text-[21px]">3.3	Penyajian dalam Chart</h2> 
          <div className="pl-3 pb-6 pt-3">
            <p className="text-justify pl-4 indent-first-line">
              Grafik batang digunakan untuk menampilkan informasi berupa frekuensi, persentase atau nilai statistik lainnya dari data yang bersifat kategorik. Garis vertikal menunjukkan frekuensi, persentase atau nilai statistik lainnya, sedangkan garis horizontal menunjukkan kategori dengan tubuh batang yang terpisah (Franklin et al., 2017).
            </p>
            <p className="text-justify pl-4 indent-first-line">
              Grafik batang dalam R dapat dibuat menggunakan fungsi barplot(). Sebagai ilustrasi, data VADeaths akan digunakan untuk membuat grafik batang. Data VADeaths memuat informasi tentang tingkat kematian per 1000 penduduk di Virginia. Penduduk dikelompokkan berdasarkan kelompok umur (baris) dan kelompok populasi (kolom). Berikut adalah isi dari data VADeaths.
            </p>
            <div className="overflow-x-auto">
                  <table className="w-[200px] h-[50px] whitespace-nowrap">
                  <thead>
                    <tr className="text-[14] font-light text-right ">
                    <th className="px-4 py-3"></th>
                    <th className="px-4 py-3">Rural Male </th>
                    <th className="px-4 py-3">Rural Female </th>
                    <th className="px-4 py-3">Urban Male </th>
                    <th className="px-4 py-3">Urban Female</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                <tr className="text-right">
                  <td className="px-4 py-3">
                  50-54
                  </td>
                  <td className="px-4 py-3">
                  11.7
                  </td>
                  <td className="px-4 py-3">
                  8.7 
                  </td>
                  <td className="px-4 py-3">
                  15.4
                  </td>
                  <td className="px-4 py-3">
                  8.4
                  </td>
                </tr>
                <tr className="text-right">
                  <td className="px-4 py-3">
                  55-59
                  </td>
                  <td className="px-4 py-3">
                  18.1
                  </td>
                  <td className="px-4 py-3">
                  11.7 
                  </td>
                  <td className="px-4 py-3">
                  24.3
                  </td>
                  <td className="px-4 py-3">
                  13.6
                  </td>
                </tr>
                <tr className="text-right">
                  <td className="px-4 py-3">
                  60-64
                  </td>
                  <td className="px-4 py-3">
                  26.9
                  </td>
                  <td className="px-4 py-3">
                  20.3
                  </td>
                  <td className="px-4 py-3">
                  37.0
                  </td>
                  <td className="px-4 py-3">
                  19.3
                  </td>
                </tr>
                <tr className="text-right">
                  <td className="px-4 py-3">
                  65-69
                  </td>
                  <td className="px-4 py-3">
                  41.0
                  </td>
                  <td className="px-4 py-3">
                  30.9
                  </td>
                  <td className="px-4 py-3">
                  54.6
                  </td>
                  <td className="px-4 py-3">
                  35.1
                  </td>
                </tr>
                <tr className="text-right">
                  <td className="px-4 py-3">
                  70-74
                  </td>
                  <td className="px-4 py-3">
                  66.0
                  </td>
                  <td className="px-4 py-3">
                  54.3
                  </td>
                  <td className="px-4 py-3">
                  71.1
                  </td>
                  <td className="px-4 py-3">
                  50.0
                  </td>
                </tr>
                </tbody>
                </table>
                </div>
            <p className="text-justify pl-2 pt-3">
              Beikut adalah perintah untuk membuat grafik batang variabel tingkat kematian penduduk perempuan yang tinggal di wilayah pedesaan Virginia (Rural Male).
            </p>
            <p className="text-justify pl-14 pt-4">
            #BARPLOT
              <br />
            VADeaths
              <br />
            par(mfrow=c(1,2))
            <br />
            # Horizontal Bar Plot for
            <br />
            barplot(VADeaths[, "Rural Female"], main="b", horiz=TRUE)
            <br />
            <br />     
            # Vertical Bar Plot for
            barplot(VADeaths[, "Rural Female"], main="a")
            </p>
            <p className="text-justify pl-4 pt-3">
              Berikut adalah hasil atau output grafik batangnya.
            </p>
            <Image className="flex mx-auto relative pt-2" src={image2_3} alt="image_2" width={500} height={500} />
            <h4 className="text-[16px] text-center pt-2">
              Gambar 2. Grafik batang
            </h4>
            <p className="text-justify pl-4 indent-first-line">
             Berdasarkan grafik batang pada Gambar 1, diketahui bahwa tingkat kematian penduduk perempuan yang tinggal di wilayah pedesaan Virginia berada pada kelompok umur 70 – 74 tahun, sedangkan tingkat kematian terendah penduduk perempuan yang tinggal di wilayah pedesaan Virginia berada pada kelompok umur 50 – 54 tahun.
             <br />
             Berikut merupakan simulasi grafik batang interaktif berdasarkan Gambar 1.
            </p>
            <br />
            <AceShiny3_2 />
            <br />
            <p className="text-justify pl-4 indent-first-line">
              Grafik Pie (Pie Chart) merupakan grafik yang hanya digunakan untuk data numerik yang bersifat non-negatif. Setiap bagian lingkaran menunjukkan persentase dari setiap kategori. Perintah yang digunakan untuk membuat grafik pie dalam R adalah pie().
            </p>
            <p className="text-justify pl-4 indent-first-line">
              Sebagai ilustrasi, data VAdeaths akan digunakan untuk membuat garfik pie pada variabel tingkat kematian penduduk perempuan yang tinggal di wilayah pedesaan Virginia sebagai berikut.
            </p>
            <p className="text-justify pl-14 pt-4">
            #PIE CHART
              <br />
            pie(VADeaths[, "Rural Female"])
              <br />
            </p>
            <p className="pl-4 pt-3">
              Berikut adalah output grafik pie yang dihasilkan.
            </p>
            <Image className="flex mx-auto relative pt-2" src={image3_3} alt="image_3" width={300} height={300} />
            <h4 className="text-[16px] text-center pt-2">
              Gambar 3. Pie Chart
            </h4>
            <p className="text-justify pl-4 indent-first-line">
            Fungsi plot()merupakan fungsi grafik yang paling umum untuk membuat plot atau grafik di R. Format dasarnya adalah plot(x, y, type=”p”). Beberapa tipe plot yang dapat digunakan adalah sebagai berikut.
            <br />
            Berikut merupakan bentuk simulasi interaktif dari Pie Chart pada Gambar 3.
            </p>
            <br />
            <AceShiny3_3 />
            <br />
            <p className="text-justify pl-4 pt-3">
              Tabel 1. Tipe-Tipe Plot dalam R
            </p>
            <div className="overflow-x-auto pt-2">
                  <table className="w-[30px] h-[50px] whitespace-nowrap border-black border-2">
                  <thead className="border-2 border-black">
                    <tr className="text-[14] font-light text-center border-2 border-black">
                    <th className="px-4 py-3 border-2 border-black">Tipe</th>
                    <th className="px-4 py-3">Rural Male </th>
                  </tr>
                </thead>
                <tbody className="bg-white border-2 border-black">
                <tr className="text-left border-2 border-black">
                  <td className="px-4 py-3 border-2 border-black italic">
                  p
                  </td>
                  <td className="px-4 py-3 ">
                  Membuat plot titik atau scatterplot. Nilai ini merupakan default pada fungsi plot().
                  </td>
                </tr>
                <tr className="text-left border-2 border-black">
                  <td className="px-4 py-3 border-2 border-black italic">
                  l
                  </td>
                  <td className="px-4 py-3">
                  Plot garis
                  </td>
                </tr>
                <tr className="text-left border-2 border-black">
                  <td className="px-4 py-3 border-2 border-black italic">
                  b
                  </td>
                  <td className="px-4 py-3">
                  Plot titik yang terhubung dengan garis
                  </td>
                </tr>
                <tr className="text-left border-2 border-black">
                  <td className="px-4 py-3 border-2 border-black italic">
                  o
                  </td>
                  <td className="px-4 py-3">
                  Plot titik yang ditimpa oleh garis
                  </td>
                </tr>
                <tr className="text-left border-2 border-black">
                  <td className="px-4 py-3 border-2 border-black italic">
                  h
                  </td>
                  <td className="px-4 py-3">
                  Plot garis vertikal dari titik ke garis y=0
                  </td>
                </tr>
                <tr className="text-left border-2 border-black">
                  <td className="px-4 py-3 border-2 border-black italic">
                  s
                  </td>
                  <td className="px-4 py-3">
                  Fungsi tangga
                  </td>
                </tr>
                <tr className="text-left border-2 border-black">
                  <td className="px-4 py-3 border-2 border-black italic">
                  n
                  </td>
                  <td className="px-4 py-3">
                  Tidak membuat grafik plot sama sekali, kecuali plot dari axis. 
                  <br />
                  Dapat digunakan untuk mengatur tampilan suatu plot utama yang diikuti oleh sekelompok plot tambahan
                  </td>
                </tr>
                </tbody>
                </table>
                </div>
            <p className="text-justify pt-3">
             Dengan perintah tersebut, mesin dapat membaca kalkulator sederhana, bahwa 50+60 hasilnya adalah 110. [1] di depan hasil adalah bagian dari cara R mencetak angka dan vektor. Untuk hasil yang hanya memiliki satu angka, tidak terlalu terlihat kegunaannya, tetapi menjadi begitu berarti ketika hasilnya vector yang panjang. Angka dalam tanda kurung adalah indeks dari angka pertama itu garis. Pertimbangkan kasus menghasilkan 15 angka acak dari normal distribusi:
            </p>
            <p className="text-justify pt-3">
              Contoh:
            </p>
            <p className="text-justify pt-3">
            # membuat vektor data
            <br />
            x &lt; &ndash; c(1:10); y &lt; &ndash; x^2 
            </p>
            <p className="text-justify pt-3">
            # membagi jendela grafik menjadi 2 baris dan 4 kolom 
            <br />
            par(mfrow=c(2,4)) 
            </p>
            <p className="text-justify pt-3">
            # loop
            <br />
            type &lt; &ndash; c("p","l","b","o","h","s","n")  
            <br />
            for (i in type) &#x7B;
            </p>
            <p className="pl-8">
            plot(x,y, type= i,
            </p>
            <p className="pl-10">
            main= paste("type=", i))
            </p>
            <p className="text-justify pt-3">
            &#x7D;
            </p>
            <p className=" text-justify pl-3 pt-3">
            Berikut adalah hasilnya:
            </p>
            <Image className="flex mx-auto relative pt-2" src={image4_3} alt="image_4" width={700} height={700} />
          </div>

          <h2 className="bg-gray-200 border-l-8 border-[#2d7343ac]  font-bold pt-3 pb-3 pl-2 text-[21px]">3.4	Penyajian dalam Stem-and-Leaf</h2> 
          <div className="pl-3 pb-6 pt-3">
            <p className="text-justify pl-4 indent-first-line">
              Jika kumpulan data relatif kecil, diagram stem-and-leaf (diagram batang-daun) berguna untuk melihat bentuk distribusi dan nilainya. Angka di sebelah kiri adalah batangnya (stem), yang digunakan untuk mengelompokkan nilai. Sedangkan angka di sebelah kanan adalah digitnya (leaf), yang menunjukkan skor individu dalam setiap kelompok.
            </p>
            <p className="text-justify pl-4">
              selDarah &lt; &ndash; c(35.2,	39.3,	40.6,	41.8,	43.1,</p>
            <p className="text-justify pl-[140px]">
              35.3,	39.4,	40.8,	41.8,	43.4, 
              <br />
              36.5,	39.5,	40.8,	42.0,	43.5,
              <br />
              37.0,	39.8,	40.9,	42.1,	43.7,
              <br />
              37.0,	39.8,	41.1,	42.2,	44.0,
              <br />
              37.7,	40.0,	41.2,	42.1,	44.2,
              <br />
              38.3,	40.0,	41.3,	42.3,	44.6,
              <br />
              38.5,	40.3,	41.4,	42.5,	44.9,
              <br />
              38.7,	40.4,	41.4,	42.5,	45.1,
              <br />
              39.2,	40.6,	42.6,	42.6,	45.9)
            </p>
          <p className="text-justify pl-4 pt-4">
            Grafik stem-and-leaf dapat dibentuk menggunakan fungsi stem() sebagai berikut.
          </p>
            <p className="text-justify pl-10 pt-4">
              &gt; stem(selDarah, scale=2)
            </p>
            <p className="text-justify pl-10 pt-4 indent-first-line">
            The decimal point is at <br />
            the |
            </p>
            <p className="text-justify pl-10 pt-4">
              35 | 23
              <br />
              36 | 5 
              <br />
              37 | 007 
              <br />
              38 | 357
              <br />
              39 | 234588
              <br />
              40 | 003466889
              <br />
              41 | 1234488
              <br />
              42 | 011235566
              <br />
              43 | 1457
              <br />
              44 | 0269
              <br />
              45 | 19
            </p>
            <p className="text-justify pl-4 pt-3">
            Grafik stem-and-leaf di atas menunjukkan bahwa data menyebar dari 35,2 sampai 45,9 tanpa ada outlier (pencilan). Data volume sel per 100 cm3 adalah multimodus (mempunyai lebih dari satu modus), yaitu 37,0; 39,8; 40,0; 40,6; 40,8; 41,4; 41,8; 42,1; 42,5 dan 42,6 sebanyak dua kali kemunculan. Nilai Kuartil kedua (median) adalah 41,8. Kurva frekuensinya menjulur ke kiri yang berarti nilai mean paling kecil dibandingkan dengan nilai median dan modus.
            </p>
      </div>
      <h2 className="bg-gray-200 border-l-8 border-[#2d7343ac]  font-bold pt-3 pb-3 pl-2 text-[21px]">
        3.5	Penyajian dalam Box Plot
      </h2> 
          <div className="pl-3 pb-6 pt-3">
            <p className="text-justify pl-4 indent-first-line">
            Boxplot merupakan grafik yang dapat memberikan gambaran pusat data, variasi dan distribusi dari sekumpulan data numerik. Untuk membentuk boxplot, perlu diketahui apakah terdapat pengamatan ekstrim (pencilan) pada data, sehingga letaknya akan berada diluar batas nilai minimum dan maksimum data. Namun, jika tidak terdapat pencilan pada data, maka boxplot akan menampilkan data dalam batas nilai minimum dan maksimum saja. Posisi statistik lima serangkai yang terdiri dari nilai minimum, Q1, median, Q3, dan nilai maksimum dapat divisualisasikan oleh boxplot (Franklin et al., 2017; Weiss, 2016).
            </p>
            <p className="text-justify pl-4 indent-first-line">
            Boxplot merupakan grafik yang dapat memberikan gambaran pusat data, variasi dan distribusi dari sekumpulan data numerik. Untuk membentuk boxplot, perlu diketahui apakah terdapat pengamatan ekstrim (pencilan) pada data, sehingga letaknya akan berada diluar batas nilai minimum dan maksimum data. Namun, jika tidak terdapat pencilan pada data, maka boxplot akan menampilkan data dalam batas nilai minimum dan maksimum saja. Posisi statistik lima serangkai yang terdiri dari nilai minimum, Q1, median, Q3, dan nilai maksimum dapat divisualisasikan oleh boxplot (Franklin et al., 2017; Weiss, 2016).
            </p>
            <p className="text-justify pl-6">
              #Boxplot
              <br />
              par(mfrow=c(1,2)) 
              <br />
              boxplot(selDarah)
              <br />
              boxplot(selDarah, horizontal=TRUE) 
              <br /> 
              par(mfrow=c(1,1))
            </p>
            <p className="text-justify pl-4 pt-6">
            Berikut adalah boxplot yang dihasilkan.
            </p>
            <Image className="flex mx-auto relative pt-4" src={image5_3} alt="image_4" width={600} height={600} />
            <h4 className="text-[16px] text-center pt-4">
                Gambar 3. Boxplot
            </h4>
            <p className="text-justify pl-4 indent-first-line pt-3">
              Garis tengah pada bagian dalam box di atas menunjukan letak median dari data. Ujung garis yang paling kanan menunjukkan nilai maksimum sedangkan ujung garis yang paling kiri menunjukkan nilai minimum. Batas paling kiri dari box menunjukkan kuartil pertama (Q1), dan batas paling kanan dari box menunjukkan kuartil ketiga (Q3). Garis perpanjangan dari Q1 ke nilai minimum dan Q3 ke nilai maksimum disebut whisker. Data dianggap simetri jika median berada di tengah kotak dan panjang whisker sama. Boxplot pada Gambar 2-2 mengindikasikan data tidak simetris karena median tidak terletak di tengah kotak dan panjang whisker tidak sama. 
            </p>
      </div>
      <h2 className="bg-gray-200 border-l-8 border-[#2d7343ac]  font-bold pt-3 pb-3 pl-2 text-[21px]">
        3.6	LATIHAN
      </h2> 
          <div className="pl-3 pb-6 pt-3">
          <ul className="list-decimal text-justify pl-3 pt-3 pb-3">
            <li>
              Moore Travel Agency, agen perjalanan berskala nasional, menawarkan tarif khusus pelayaran ke Karibia bagi para warga negara berusia lanjut. Presiden Moore Travel ingin informasi tambahan mengenai usia orang– orang yang mengikuti pelayaran. Sebuah sampel acak berukuran 40 diambil dari mereka yang mengikuti pelayaran tahun lalu, yang usianya seperti berikut ini.
              <br />
              <p className="text-justify pl-6 pt-2">
              77	18	63	84	38	54	50	59	54	56
              <br />
              36	26	50	34	44	41	58	58	53	51
              <br />
              62	43	52	53	63	62	62	65	61	52
              <br />
              60	60	45	66	83	71	63	58	61	71
              </p>
              Gambarkan hasil penyajian data dalam bentuk boxplot, histogram dan stem and leaf serta interpretasikan hasilnya. Tentukan median dan modus dari data tersebut. Apakah terdapat outliers pada data? Jelaskan!
            </li>
            <li className="pt-3">
            	Suatu survei mengenai banyaknya telepon yang diterima sampel pelanggan Southern Phone Company pada minggu lalu, disajikan berikut ini.
            <p className="text-justify pl-6 pt-2">
              52	43	30	38	30	42	12	46
              <br />
              39	37	34	46	32	18	41	5
              </p>
              <ul className="list-disc text-justify pl-3 pt-3 pb-3">
            <li>
              Buatlah boxplot, histogram, dan stem and leaf dari data tersebut serta interpretasikan hasilnya.
            </li>
            <li>
              Berapakah median dan kuartil dari data tersebut?
            </li>
            <li>
              Apakah terdapat outliers pada data? Jelaskan!
            </li>           
          </ul>
            </li>           
         </ul>
      </div> 
      <h2 className="bg-gray-200 border-l-8 border-[#2d7343ac]  font-bold pt-3 pb-3 pl-2 text-[21px]">
        DAFTAR PUSTAKA
      </h2> 
          <div className="pl-3 pb-6 pt-3">
          <p className="text-justify pl-4 pt-3">
          Franklin, C. A., Klingenberg, B., & Agresti, A. (2017). Statistics: The Art and Science of Learning from Data, Global Edition.
          <br />
          Pearson, R. K. (2018). Exploratory Data Analysis Using R. CRC Press, Taylor & Francis Group.
          <br />
          Weiss, N. A. (2016). Introductory Statistics. In Angewandte Chemie International Edition, 6(11), 951–952. Pearson.
          </p>
      </div> 
    </div>
  </div>
  </div>
</div>
</div>
<Image className="bottom-0 mx-auto pt-2 w-[full] h-[200px]" src={eclipse2} alt="compiler" /> 
    </>
    
  );
};

export default withAuth(ModuleBab3);