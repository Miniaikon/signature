<template>
	<vs-row vs-align="center" vs-type="flex" vs-justify="space-around" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="pr-1" vs-w="6">
            <vs-card>
                <div slot="header">
                    <h3>
                    Buscar cliente
                    </h3>
                </div>
                <div>
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <label for="">Nro. Cliente</label>
                    </vs-col>
                     <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <vs-input class="inputx" placeholder="Nro. Cliente" />
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-w="4" class="p-1">
                         <vs-button color="primary">Buscar</vs-button>
                    </vs-col>
                    <!-- other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <label for="">Nro. Envío</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <vs-input class="inputx" placeholder="Nro. Envío" />
                        </vs-col>
                    </vs-row>
                    <!-- other -->
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <label for="">Documento</label>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <select name="" class="vs-inputx vs-input--input normal" id="">
                            <option value="C.I">C.I</option>
                        </select>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <vs-input class="inputx" placeholder="" />
                    </vs-col>
                    <!-- Other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <label for="">Nombre / Apellido</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <vs-input class="inputx" placeholder="Nombre" />
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <vs-input class="inputx" placeholder="Apellido" />
                        </vs-col>
                    </vs-row>
                </div>

            </vs-card>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="pl-1" vs-w="6">
            <vs-card>
                <div slot="header">
                    <h3>
                        Datos de quien recive
                    </h3>
                </div>
                <div>
                    <vs-col vs-type="flex" vs-w="4" class="pb-5">
                        <label for="">Fecha</label>
                    </vs-col>
                     <vs-col vs-type="flex" vs-w="4" class="pb-5">
                        <vs-input class="inputx" placeholder="Fecha" />
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-w="4" class="pb-5">
                         <vs-button color="primary">Retira Cliente</vs-button>
                    </vs-col>
                    <!-- other -->
                    <vs-col vs-type="flex" vs-w="4" class="pb-5">
                        <label for="">Documento</label>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="4" class="pb-5">
                        <select name="" class="vs-inputx vs-input--input normal" id="">
                            <option value="C.I">C.I</option>
                        </select>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="4" class="pb-5">
                        <vs-input class="inputx" placeholder="" />
                    </vs-col>
                    <!-- Other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="4" class="pb-5">
                            <label for="">Nombre</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="8" class="pb-6">
                            <vs-input class="inputx" placeholder="Nombre" />
                        </vs-col>
                    </vs-row>
                </div>

            </vs-card>
        </vs-col>
    </vs-row>
</template>
