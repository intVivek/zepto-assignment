import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const options = [
            {
              "label": "Vivek Srivastava",
              "value": 1,
              "icon": "https://robohash.org/estquiset.png?size=50x50&set=set2"
            },
            {
              "label": "Sherlock Harbidge",
              "value": 2,
              "icon": "https://robohash.org/iurealiquidoptio.png?size=50x50&set=set1"
            },
            {
              "label": "Doreen Cornfoot",
              "value": 3,
              "icon": "https://robohash.org/quiaccusamusalias.png?size=50x50&set=set1"
            },
            {
              "label": "Myca Teliga",
              "value": 4,
              "icon": "https://robohash.org/fugiatvelitnostrum.png?size=50x50&set=set1"
            },
            {
              "label": "Dina Sheather",
              "value": 5,
              "icon": "https://robohash.org/aliquameiusillum.png?size=50x50&set=set1"
            },
            {
              "label": "Hermina Giorgeschi",
              "value": 6,
              "icon": "https://robohash.org/accusamusfugapossimus.png?size=50x50&set=set1"
            },
            {
              "label": "Melisa Dormand",
              "value": 7,
              "icon": "https://robohash.org/velaspernaturet.png?size=50x50&set=set1"
            },
            {
              "label": "Reid Rosenstein",
              "value": 8,
              "icon": "https://robohash.org/liberoinut.png?size=50x50&set=set1"
            },
            {
              "label": "Corney Segot",
              "value": 9,
              "icon": "https://robohash.org/molestiasipsaratione.png?size=50x50&set=set1"
            },
            {
              "label": "Jacky Comsty",
              "value": 10,
              "icon": "https://robohash.org/ipsamolestiasnon.png?size=50x50&set=set1"
            },
            {
              "label": "Janene Pinare",
              "value": 11,
              "icon": "https://robohash.org/numquamdebitisoccaecati.png?size=50x50&set=set1"
            },
            {
              "label": "Finley Bernaldo",
              "value": 12,
              "icon": "https://robohash.org/cumquilaudantium.png?size=50x50&set=set1"
            },
            {
              "label": "Kaile Larway",
              "value": 13,
              "icon": "https://robohash.org/quisquampossimusest.png?size=50x50&set=set1"
            },
            {
              "label": "Forster Birdwistle",
              "value": 14,
              "icon": "https://robohash.org/inadut.png?size=50x50&set=set1"
            },
            {
              "label": "Gradeigh Vedmore",
              "value": 15,
              "icon": "https://robohash.org/omnisexdolor.png?size=50x50&set=set1"
            },
            {
              "label": "Karol Fery",
              "value": 16,
              "icon": "https://robohash.org/saepenesciuntconsequatur.png?size=50x50&set=set1"
            },
            {
              "label": "Erma Flewitt",
              "value": 17,
              "icon": "https://robohash.org/estquiset.png?size=50x50&set=set1"
            },
            {
              "label": "Jenny Doles",
              "value": 18,
              "icon": "https://robohash.org/laboreinassumenda.png?size=50x50&set=set1"
            },
            {
              "label": "Huntlee Leavold",
              "value": 19,
              "icon": "https://robohash.org/rerumexplicabovoluptatem.png?size=50x50&set=set1"
            },
            {
              "label": "Hadria Kupke",
              "value": 20,
              "icon": "https://robohash.org/asperioresautquisquam.png?size=50x50&set=set1"
            }
          ]
          

        return NextResponse.json(options);
    } catch (err) {
        console.log(err);
    }
}