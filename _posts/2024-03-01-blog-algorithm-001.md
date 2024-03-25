---
title: 'Algorithm: Principal components analysis (PCA)'
date: 2024-03-01
permalink: /posts/2024/03/blog-algorithm-001/
author_profile: true
tags:
  - Point Cloud
  - Algorithm
---

Algorithm: Principal components analysis (PCA)

主成分分析（PCA）是由卡尔·皮尔逊（Karl Pearson）在1901年提出的。虽然他是第一个将这一概念应用于数据分析的人，但是PCA的数学形式和现代的理解则是由哈罗德·霍特林（Harold Hotelling）在1933年进一步发展和推广的。

>Reference: 
>KPFRS, LIII. "On lines and planes of closest fit to systems of points in space." Proceedings of the 17th ACM SIGACT-SIGMOD-SIGART symposium on Principles of database systems (SIGMOD). 1901.
>Hotelling, Harold. "Analysis of a complex of statistical variables into principal components." Journal of educational psychology 24.6 (1933): 417. [https://doi.org/10.1037/h0071325](https://doi.org/10.1037/h0071325)

主成分分析（Principal Component Analysis，PCA）是一种常用的统计方法，用于降低数据维度并发现数据中的结构。它**通过线性变换将高维数据投影到一个低维子空间中，以便保留尽可能多的原始数据的变异性**。

>* 方差最大化原则：主成分分析（PCA）的目标是找到投影方向，使得数据在这个方向上的方差最大化。这意味着投影后的数据能够尽可能地保留原始数据的变异性。通过选择最大方差的方向作为第一个主成分，依次选择其余方向的主成分，可以逐步捕捉数据中的变异性。
>* 特征向量的选择：在PCA中，投影方向由数据的特征向量确定。特征向量是协方差矩阵的特征值对应的向量，它们表示了数据中的主要方向。选择协方差矩阵的前几个特征向量对应的特征值较大的方向作为主成分，能够最大程度地保留原始数据的方差，因此可以保留尽可能多的原始数据的变异性。


基本原理：

PCA的基本思想是将原始数据投影到一个新的坐标系中，使得投影后的数据在各个坐标轴上的方差尽可能大，从而保留数据中的大部分信息。

算法步骤：

* 标准化数据：将原始数据按列进行标准化处理，使得每个特征的均值为0，方差为1。
* 计算协方差矩阵：对标准化后的数据计算协方差矩阵。

>* 协方差矩阵是描述多个随机变量之间关系的重要工具。在统计学和线性代数中，协方差矩阵提供了变量之间的协方差信息，从而反映它们的相关性和变化趋势。假设我们有一个包含多个随机变量的数据集，其中包括 $$ n $$ 个变量（维度）。协方差矩阵是一个 $$ n \times n $$ 的矩阵，其中第 $$ i $$ 行第 $$ j $$ 列的元素表示第 $$ i $$ 个变量和第 $$ j $$ 个变量之间的协方差。对角线上的元素是各个变量的方差，非对角线上的元素是不同变量之间的协方差。
>* 其中 $$ \text{cov}(X_i, X_j) $$ 表示变量 $$ X_i $$和$$ X_j $$ 之间的协方差。
>* 在主成分分析（PCA）中，协方差矩阵是关键的，因为它提供了数据的特征信息。通过对协方差矩阵进行特征值分解，我们可以得到数据的主要方向（即主成分），从而实现数据的降维和特征提取。



* 特征值分解：对协方差矩阵进行特征值分解，得到特征值和对应的特征向量。
* 选取主成分：根据特征值的大小，选取前几个特征向量作为主成分。
* 数据投影：将原始数据投影到选取的主成分构成的新的低维空间中。

应用：

* 降维：PCA可以用于降低数据的维度，保留数据中的主要信息，从而减少计算量和存储空间。
* 数据可视化：通过将高维数据映射到二维或三维空间中，可以更容易地对数据进行可视化分析。
* 去噪：PCA可以帮助去除数据中的噪声，保留数据中的信号部分。
* 特征提取：PCA可以用于提取数据中的主要特征，从而更好地理解数据的结构和特点。

注意：

* 数据的标准化对PCA的结果影响很大，需要在进行PCA之前对数据进行标准化处理。
* PCA对数据的线性关系敏感，如果数据存在非线性关系，PCA可能无法有效提取数据的结构信息。
* 选择合适的主成分数量是一个重要的问题，通常可以通过保留一定比例的方差来确定主成分的数量。

* python使用NumPy库手动实现PCA的代码，包括数据标准化、计算协方差矩阵、特征值分解、选择主成分和投影数据等步骤。最后输出了主成分和解释方差比，并绘制了原始数据和降维后的数据的散点图以进行可视化比较。

```
import numpy as np
import matplotlib.pyplot as plt

# 创建一个示例数据集
X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])

# 1. 数据标准化（可选）
X_mean = np.mean(X, axis=0)  # 计算每个特征的均值
X_std = np.std(X, axis=0)    # 计算每个特征的标准差
X_standardized = (X - X_mean) / X_std  # 对数据进行标准化处理

# 2. 计算协方差矩阵
cov_matrix = np.cov(X_standardized, rowvar=False)

# 3. 特征值分解
eigenvalues, eigenvectors = np.linalg.eig(cov_matrix)

# 4. 选择主成分
# 对特征值从大到小排序，并获取排序后的索引
sorted_indices = np.argsort(eigenvalues)[::-1]
# 根据排序后的索引选择最重要的几个特征向量作为主成分
num_components = 2  # 指定要保留的主成分数量
principal_components = eigenvectors[:, sorted_indices[:num_components]]

# 5. 投影数据
X_transformed = np.dot(X_standardized, principal_components)

# 输出主成分和方差解释比
print("Principal components:")
print(principal_components)
print("\nExplained variance ratio:")
explained_variance_ratio = eigenvalues[sorted_indices[:num_components]] / np.sum(eigenvalues)
print(explained_variance_ratio)

# 绘制原始数据和降维后的数据
plt.figure(figsize=(8, 4))

# 绘制原始数据
plt.subplot(1, 2, 1)
plt.title("Original Data")
plt.scatter(X[:, 0], X[:, 1], label='Feature 1', color='blue')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')

# 绘制降维后的数据
plt.subplot(1, 2, 2)
plt.title("PCA Transformed Data")
plt.scatter(X_transformed[:, 0], X_transformed[:, 1], label='PC1', color='red')
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')

plt.tight_layout()
plt.show()
```





