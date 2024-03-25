---
layout: archive
title: "Conference paper: Research on the application of digital twin technology for the protection of ancient and famous trees (Originally written in Chinese)"
collection: Publications
permalink: /Publications/paper-001
excerpt: ''
date: 2023-10-20
venue: '数字景观——中国第六届数字景观学术论坛'
paperurl: ''
author_profile: true
---
<!--citation: '郭湧, 孙宇轩. 面向古树名木保护的数字孪生树木技术应用研究[C]//数字景观——中国第六届数字景观学术论坛, 2023.'-->


>* The following content is an excerpt and translation of the original paper, aimed at personal writing practicing and academic communication.
>* The original paper "面向古树名木保护的数字孪生树木技术应用研究" was published in ["数字景观——中国第六届数字景观学术论坛"](https://mp.weixin.qq.com/s?__biz=MzI2NTUyODY5Ng==&mid=2247554452&idx=1&sn=91500987edcb7d9cae32d5b7e99cb3ac&chksm=ea99a183ddee28956b225c116f3f4e5f0f246868dd5ce748e6f3dc1d55097017f4b2aa143710&scene=27) in Chinese.

- [Abstract](#abstract)
- [1 Introduction](#1-introduction)
  - [1.1 Research status of the protection of the ancient and famous trees](#11-research-status-of-the-protection-of-the-ancient-and-famous-trees)
  - [1.2 Research progress of the digital twin technology of trees](#12-research-progress-of-the-digital-twin-technology-of-trees)
  - [1.3 Research purpose and significance](#13-research-purpose-and-significance)
- [2 Data sources and research method](#2-data-sources-and-research-method)
  - [2.1 Data sources](#21-data-sources)
  - [2.2 Research method](#22-research-method)
- [3 Result and analysis](#3-result-and-analysis)
  - [3.1 Structural parameters and analysis](#31-structural-parameters-and-analysis)
  - [3.2 Interaction with BIM/LIM environment and visualization](#32-interaction-with-bimlim-environment-and-visualization)
- [4 Conclusion and Discussion](#4-conclusion-and-discussion)

Abstract
------

* Through continuous Terrestrial Laser Scanning (TLS) of the old *Koelreuteria paniculata* in Yantai Mountain, Yantai, Shandong Province, point cloud data from different periods were obtained, and a quantitative structure model (QSM) of the ancient tree was reconstructed as the basis of the digital twin model.

* By analyzing the model, its parameters reflecting growth conditions such as tree height and diameter at breast height (DBH) etc. were more accurately obtained.

* By interacting with the landscape information modeling (LIM) environment, the real form and dynamic changes in growth of the ancient tree can be visualized.

* This research provides:
    * Information technology methods and quantitative data references for the protection of ancient and famous trees.
    * Digital basis and support for the design, construction, and operation of landscape architecture engineering projects.
    * Application pathways and directions for digital twin technology.


## 1 Introduction

### 1.1 Research status of the protection of the ancient and famous trees

* The current protection can be divided into technical and managerial aspects. 
  * The technical aspect mainly includes ancient tree age detection, rejuvenation techniques, and pest and disease prevention.
  * The managerial aspect primarily involves compliance with laws and regulations, dynamic monitoring, information documentation, and the establishment of information systems.

### 1.2 Research progress of the digital twin technology of trees

* The digital twin technology of trees mainly focus on the construction method of tree digitized geometric model, implementation path of growth simulation, simulation of microclimate impact, and application of sensing and communication technology in landscape archetecture field.

### 1.3 Research purpose and significance

* This research aims to explore the technical pathway for constructing a digital twin model of ancient and famous trees using point cloud data, with the goal of aiding in the conservation efforts for these trees.

## 2 Data sources and research method

### 2.1 Data sources

* This research continues to use Terrestrial Laser Scanning (TLS) on the old *Koelreuteria paniculata* in Yantai. Two sets of point cloud data of the tree and its surrounding environment were obtained in 2021 and 2023, serving as the primary data sources for the research.The visualized point cloud data is shown in Figure 1 and Figure 2.

![Fig.1](/images/pub-images/paper-001-figure-001.jpg)

<center><b>Fig.1 Data collected in 2021</b></center>

![Fig.2](/images/pub-images/paper-001-figure-002.jpg)

<center><b>Fig.2 Data collected in 2023</b></center>

### 2.2 Research method

* Pre-processing of point cloud data and Segmentation of the individual tree

    * The data processing is carried out in the CloudCompare and CompuTree/SimpleForest environments. The raw point cloud data obtained from the site scans are clipped to remove data points irrelevant to the surrounding site and model construction. Missing ground point clouds are supplemented based on the current situation, resulting in preliminary modeling-ready point cloud data for the tree.

    * Due to the presence of other trees and shrubs of varying heights within the growth area of the target tree and intertwined growth of the plants, manual segmentation methods struggle to accurately handle this portion of the data. Therefore, after extracting pre-selected points from the preliminary processed point cloud data, the Dijkstra algorithm[^1] is used to extract the indivisual stem to achieve the effect of indivisual tree segmentation.The Voronoi-based algorithm is used for further denoising. After processing, point cloud data suitable for modeling is obtained.

* Reconstruction of the digital twin model of the old *Koelreauteria paniculata*

    * For the processed point cloud data of the tree, cylindrical fitting is performed to the point cloud data according to the method proposed by Hackenberg et al.[^2] Once fitted, the preliminary construction of the quantified structural model of the tree is completed.

    * The preliminary model, due to noise interference, cannot fully reflect the true morphology of the tree. The radii of some branches do not match the actual values, thus requiring further refinement of the model. According to the pipe model theory proposed by Shinozaki et al.[^3] and based on the research by Côté et al.[^4], the radii model of some branches is adjusted. The algorithm generates cylindrical models to represent the trunk, with the bottom cylinder slightly higher than the ground elevation and with a certain degree of tilt. It needs to be extrapolated to the ground elevation to make the modeling results more accurate. After the data processing is completed and exported, the digital twin model of the tree is obtained.The QSM as the basis of digital twin model is shown in Figure 3.

![Fig.3](/images/pub-images/paper-001-figure-003.jpg)

<center><b>Fig.3 The quantitative structure model</b></center>



## 3 Result and analysis

### 3.1 Structural parameters and analysis

* Based on the above method, two sets of models of the tree and their data were obtained. Quantitative data analysis was conducted in R to examine specific structural parameters.The data reflects the actual growth status of the tree, and the results observed on-site are consistent with the information reflected in the digital model.

<table>
  <tr>
    <th>Acquisition time of the data</th>
    <th>Tree height / m</th>
    <th>Diameter at breast height / m</th>
    <th>Ground diameter/m</th>
    <th>Crown projection area / m²</th>
    <th>Tree branch volume / m³</th>
  </tr>
  <tr>
    <td>2021</td>
    <td>9.85</td>
    <td>0.60</td>
    <td>0.60</td>
    <td>92.15</td>
    <td>131.13</td>
  </tr>
  <tr>
    <td>2023</td>
    <td>9.77</td>
    <td>0.60</td>
    <td>0.60</td>
    <td>85.34</td>
    <td>113.88</td>
  </tr>
</table>

### 3.2 Interaction with BIM/LIM environment and visualization

* The processed model of the tree is imported into the BIM/LIM environment, which can be combined with the point cloud data of the site, accurately reflecting the actual growth status of the old tree and its relationship with the surrounding environment. Visualizing and comparing the two sets of data in the BIM environment can reveal the dynamic changes of the tree, providing a technical path for further achieving dynamic monitoring of ancient trees and diagnosis based on monitoring results. The visualization result is shown in Figure 4.

![Fig.4](/images/pub-images/paper-001-figure-004.jpg)

<center><b>Fig.4 Model in the BIM environment</b></center>

## 4 Conclusion and Discussion

In the future, this research could be expanded and further explored in the following aspects:

* It is possible to integrate with the Internet of Things (IoT) and the information systems to provide dynamic monitoring methods for the protection of ancient and famous trees.

* By optimizing the data processing, more quantitative data and information can be extracted and provided for the protection of ancient and famous trees.



[^1]: <span style="font-size: 1.8em;">[Dijkstra E W. A Note on Two Problems in Connexion with Graphs[J]. Numerische Mathematik, 1959, 1: 269-271.](https://doi.org/10.1007/BF01386390)</span>

[^2]: <span style="font-size: 1.8em;">[Hackenberg J, Morhart C, Sheppard J, et al. Highly accurate tree models derived from terrestrial laser scan data: A method description[J]. Forests, 2014, 5(5): 1069-1105.](https://doi.org/10.3390/f5051069)</span>

[^3]: <span style="font-size: 1.8em;">[Shinozaki K, Yoda K, Hozumi K, et al. A quantitative analysis of plant form-the pipe model theory: I. Basic analyses[J]. Japanese Journal of ecology, 1964, 14(3): 97-105.](https://doi.org/10.18960/seitai.14.3_97)</span>

[^4]: <span style="font-size: 1.8em;">[Côté J F, Fournier R A, Frazer G W, et al. A fine-scale architectural model of trees to enhance LiDAR-derived measurements of forest canopy structure[J]. Agricultural and forest meteorology, 2012, 166: 72-85.](https://doi.org/10.1016/j.agrformet.2012.06.007)</span>


<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Table with Row Borders</title>
<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    border: 1px solid #dddddd;
    text-align: center; /* 居中对齐 */
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(odd) {
    background-color: #f9f9f9; /* 更改奇数行的背景颜色 */
  }
</style>

