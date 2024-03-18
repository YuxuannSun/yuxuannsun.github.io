---
layout: archive
title: "Thesis: Research on Cryopreservation of 24 Seeds of the Landscape Trees (Originally written in Chinese)"
collection: Publications
permalink: /Publications/thesis-001
excerpt: ''
date: 2018-07-01
venue: 'Beijing Forestry University'
paperurl: ''
author_profile: true
---
<!--citation: ''-->


>* The following content is an excerpt and translation of my undergraduate thesis, aimed at personal knowledge reviewing and writing practicing.
>* The original version was written in Chinese, awarded as an Excellent Undergraduate Thesis of the Class of 2018 at Beijing Forestry University.
>* The thesis was advised by [Prof. Yan Liu](https://sola.bjfu.edu.cn/cn/teachers/famous/index.html), whose integrity, kindness, and rigorous character constantly benefit students for life.

- [Abstract](#abstract)
- [Data sources and research method](#data-sources-and-research-method)
  - [Data sources](#data-sources)
  - [Research method](#research-method)
- [Result and analysis](#result-and-analysis)
  - [Structural parameters and analysis](#structural-parameters-and-analysis)
  - [Interaction with BIM/LIM environment and visualization](#interaction-with-bimlim-environment-and-visualization)
- [Discussion](#discussion)

Abstract
------

* Germplasm resources are the foundation of human survival and development, and germplasm preservation is of significant importance. Cryopreservation is a method for long-term preservation of germplasm, typically referring to a biotechnological approach of storing biological materials at -196°C (liquid nitrogen temperature). It is currently a hot topic in international germplasm preservation. However, its application in the preservation of seeds from landscape trees is not yet widespread.

* The present research focuses on 24 species of landscape tree seeds, determining their vitality and moisture content. Additionally, it investigates the germination and growth conditions of seeds after cryopreservation at different time intervals, as well as their performance upon field sowing. The aim is to explore the feasibility and technical methods of cryopreservation for these 24 species of garden tree seeds. The results are as follows:
  * Among the 24 species of landscape tree seeds studied, seeds from 7 species including ***Syringa oblata***, ***Lonicera maackiie***, ***Acer truncatum***, ***Chimonanthus praecox***, ***Berberis thunbergii 'Atropurpurea'***, ***Albizia julibrissin*** and ***Forsythia suspensa*** retain their germination ability after 30-50 days of cryopreservation.
  * Seeds from five species including ***Syringa oblata***, ***Acer truncatum***, ***Chimonanthus praecox***, ***Albizia julibrissin***, and ***Forsythia suspensa*** still possess the ability to develop into healthy plants after being sown in the field following 30-50 days of cryopreservation. Their growth condition shows no significant difference compared to the treatment group. Cryopreservation technology is feasible for the application of these five species of seeds.
  * 
  * 

## Data sources and research method

### Data sources

* This research continues to use Terrestrial Laser Scanning (TLS) on the old *Koelreuteria paniculata* in Yantai. Two sets of point cloud data of the tree and its surrounding environment were obtained in 2021 and 2023, serving as the primary data sources for the research.The visualized point cloud data is shown in Figure 1 and Figure 2.

![Fig.1](/images/pub-images/paper-001-figure-001.jpg)

<center>Fig.1 Data collected in 2021</center>

![Fig.2](/images/pub-images/paper-001-figure-002.jpg)

<center>Fig.2 Data collected in 2023</center>

### Research method

* Pre-processing of point cloud data and Segmentation of the individual tree

    * The data processing is carried out in the CloudCompare and CompuTree/SimpleForest environments. The raw point cloud data obtained from the site scans are clipped to remove data points irrelevant to the surrounding site and model construction. Missing ground point clouds are supplemented based on the current situation, resulting in preliminary modeling-ready point cloud data for the tree.

    * Due to the presence of other trees and shrubs of varying heights within the growth area of the target tree and intertwined growth of the plants, manual segmentation methods struggle to accurately handle this portion of the data. Therefore, after extracting pre-selected points from the preliminary processed point cloud data, the Dijkstra algorithm[^1] is used to extract the indivisual stem to achieve the effect of indivisual tree segmentation.The Voronoi-based algorithm is used for further denoising. After processing, point cloud data suitable for modeling is obtained.

* Reconstruction of the digital twin model of the old *Koelreauteria paniculata*

    * For the processed point cloud data of the tree, cylindrical fitting is performed to the point cloud data according to the method proposed by Hackenberg et al.[^2] Once fitted, the preliminary construction of the quantified structural model of the tree is completed.

    * The preliminary model, due to noise interference, cannot fully reflect the true morphology of the tree. The radii of some branches do not match the actual values, thus requiring further refinement of the model. According to the pipe model theory proposed by Shinozaki et al.[^3] and based on the research by Côté et al.[^4], the radii model of some branches is adjusted. The algorithm generates cylindrical models to represent the trunk, with the bottom cylinder slightly higher than the ground elevation and with a certain degree of tilt. It needs to be extrapolated to the ground elevation to make the modeling results more accurate. After the data processing is completed and exported, the digital twin model of the tree is obtained.The QSM as the basis of digital twin model is shown in Figure 3.

![Fig.3](/images/pub-images/paper-001-figure-003.jpg)

<center>Fig.3 The quantitative structure model</center>



## Result and analysis

### Structural parameters and analysis

* Based on the above method, two sets of models of the tree and their data were obtained. Quantitative data analysis was conducted in R to examine specific structural parameters.The data reflects the actual growth status of the tree, and the results observed on-site are consistent with the information reflected in the digital model.

### Interaction with BIM/LIM environment and visualization

* The processed model of the tree is imported into the BIM/LIM environment, which can be combined with the point cloud data of the site, accurately reflecting the actual growth status of the old tree and its relationship with the surrounding environment. Visualizing and comparing the two sets of data in the BIM environment can reveal the dynamic changes of the tree, providing a technical path for further achieving dynamic monitoring of ancient trees and diagnosis based on monitoring results. The visualization result is shown in Figure 4.

![Fig.4](/images/pub-images/paper-001-figure-004.jpg)

<center>Fig.4 Model in the BIM environment</center>



## Discussion

In the future, this research could be expanded and further explored in the following aspects:

* It is possible to integrate with the Internet of Things (IoT) and the information systems to provide dynamic monitoring methods for the protection of ancient and famous trees.

* By optimizing the data processing, more quantitative data and information can be extracted and provided for the protection of ancient and famous trees.



[^1]: <span style="font-size: 1.8em;">[Dijkstra E W. A Note on Two Problems in Connexion with Graphs[J]. Numerische Mathematik, 1959, 1: 269-271.](https://doi.org/10.1007/BF01386390)</span>

[^2]: <span style="font-size: 1.8em;">[Hackenberg J, Morhart C, Sheppard J, et al. Highly accurate tree models derived from terrestrial laser scan data: A method description[J]. Forests, 2014, 5(5): 1069-1105.](https://doi.org/10.3390/f5051069)</span>

[^3]: <span style="font-size: 1.8em;">[Shinozaki K, Yoda K, Hozumi K, et al. A quantitative analysis of plant form-the pipe model theory: I. Basic analyses[J]. Japanese Journal of ecology, 1964, 14(3): 97-105.](https://doi.org/10.18960/seitai.14.3_97)</span>

[^4]: <span style="font-size: 1.8em;">[Côté J F, Fournier R A, Frazer G W, et al. A fine-scale architectural model of trees to enhance LiDAR-derived measurements of forest canopy structure[J]. Agricultural and forest meteorology, 2012, 166: 72-85.](https://doi.org/10.1016/j.agrformet.2012.06.007)</span>

