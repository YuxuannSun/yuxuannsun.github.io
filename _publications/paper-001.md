---
layout: archive
title: "Research on the application of digital twin technology for the protection of ancient and famous trees(Original paper in Chinese)"
collection: Publications
permalink: /Publications/paper-001
excerpt: ''
date: 2023-10-20
venue: '数字景观——中国第六届数字景观学术论坛'
paperurl: ''
citation: '郭湧, 孙宇轩. 面向古树名木保护的数字孪生树木技术应用研究[C]//数字景观——中国第六届数字景观学术论坛, 2023.'
---

Notice
------
>* The following content is an excerpt and translation of the original paper, aimed at writing practicing and personal academic communication.
>* The original paper "面向古树名木保护的数字孪生树木技术应用研究" was published in ["数字景观——中国第六届数字景观学术论坛"](https://mp.weixin.qq.com/s?__biz=MzI2NTUyODY5Ng==&mid=2247554452&idx=1&sn=91500987edcb7d9cae32d5b7e99cb3ac&chksm=ea99a183ddee28956b225c116f3f4e5f0f246868dd5ce748e6f3dc1d55097017f4b2aa143710&scene=27) in Chinese.

Abstract
------

* Through continuous Terrestrial Laser Scanning (TLS) of the old *Koelreuteria paniculata* in Yantai Mountain, Yantai, Shandong Province, point cloud data from different periods were obtained, and a quantitative structure model (QSM) of the ancient tree was reconstructed as the basis of the digital twin model.

* By analyzing the model, its parameters reflecting growth conditions such as tree height and diameter at breast height (DBH) etc. were more accurately obtained.

* By interacting with the landscape information modeling (LIM) environment, the real form and dynamic changes in growth of the ancient tree can be visualized.

* This research provides:
    * Information technology methods and quantitative data references for the protection of ancient and famous trees.
    * Digital basis and support for the design, construction, and operation of landscape architecture engineering projects.
    * Application pathways and directions for digital twin technology.



Data sources and research method
------

**Data sources**

* This research continues to use Terrestrial Laser Scanning (TLS) on the old *Koelreuteria paniculata* in Yantai. Two sets of point cloud data for the tree and its surrounding environment were obtained in 2021 and 2023, serving as the primary data sources for the research.The visualized point cloud data is shown in Figure 1 and Figure 2.

![Fig.1](/images/pub-images/paper-001-figure-001.jpg)

<center>Fig.1 Data collected in 2021</center>

![Fig.2](/images/pub-images/paper-001-figure-002.jpg)

<center>Fig.2 Data collected in 2023</center>

**Research method**

* Pre-processing of point cloud data and Segmentation of the individual tree

    * The data processing is carried out in the CloudCompare and CompuTree/SimpleForest environments. The raw point cloud data obtained from the site scans are clipped to remove data points irrelevant to the surrounding site and model construction. Missing ground point clouds are supplemented based on the current situation, resulting in preliminary modeling-ready point cloud data for the tree.

    * Due to the presence of other trees and shrubs of varying heights within the growth area of the target tree and intertwined growth of the plants, manual segmentation methods struggle to accurately handle this portion of the data. Therefore, after extracting pre-selected points from the preliminary processed point cloud data, the Dijkstra algorithm is used to extract the indivisual stem to achieve the effect of indivisual tree segmentation.The Voronoi-based algorithm is used for further denoising. After processing, point cloud data suitable for modeling is obtained.

* Reconstruction of the digital twin model of the old *Koelreauteria paniculata*

    * For the processed point cloud data of the tree, cylindrical fitting is performed to the point cloud data according to the method proposed by Hackenberg et al. Once fitted, the preliminary construction of the quantified structural model of the tree is completed.

    * The preliminary model, due to noise interference, cannot fully reflect the true morphology of the tree. The radii of some branches do not match the actual values, thus requiring further refinement of the model. According to the pipe model theory proposed by Shinozaki et al. and based on the research by Côté et al., the radii model of some branches is adjusted. The algorithm generates cylindrical models to represent the trunk, with the bottom cylinder slightly higher than the ground elevation and with a certain degree of tilt. It needs to be extrapolated to the ground elevation to make the modeling results more accurate. After the data processing is completed and exported, the digital twin model of the tree is obtained.The QSM as the basis of digital twin model is shown in Figure 3.

![Fig.3](/images/pub-images/paper-001-figure-003.jpg)

<center>Fig.3 The quantitative structure model</center>

Result and analysis
------

**Structural parameters and analysis**

* Based on the above method, two sets of models of the tree and their data were obtained. Quantitative data analysis was conducted in R to examine specific structural parameters.The data reflects the actual growth status of the tree, and the results observed on-site are consistent with the information reflected in the digital model.

**Interaction with BIM/LIM environment and visualization**

* The processed model of the tree is imported into the BIM/LIM environment, which can be combined with the point cloud data of the site, accurately reflecting the actual growth status of the old tree and its relationship with the surrounding environment. Visualizing and comparing the two sets of data in the BIM environment can reveal the dynamic changes of the tree, providing a technical path for further achieving dynamic monitoring of ancient trees and diagnosis based on monitoring results. The visualization result is shown in Figure 4.

![Fig.4](/images/pub-images/paper-001-figure-004.jpg)

<center>Fig.4 Model in the BIM environment</center>

Discussion
------

In the future, this research could be expanded and further explored in the following aspects:

* It is possible to integrate with the Internet of Things (IoT) and the information systems to provide dynamic monitoring methods for the protection of ancient and famous trees.

* By optimizing the data processing, more quantitative data and information can be extracted and provided for the protection of ancient and famous trees.